/* eslint-env node */
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contact from './api/contact.js'
import availability from './api/availability.js'
import createOrder from './api/create-order.js'
import verifyPayment from './api/verify-payment.js'
import webhook from './api/razorpay-webhook.js'
import appointmentStatus from './api/appointment-status.js'

const bookingApis = {
  '/api/availability': availability,
  '/api/create-order': createOrder,
  '/api/verify-payment': verifyPayment,
  '/api/razorpay-webhook': webhook,
  '/api/appointment-status': appointmentStatus
}

function localApis(mode) {
  function configure(server) {
    const keys = [
      'APPS_SCRIPT_URL', 'APPS_SCRIPT_SECRET', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL',
      'RAZORPAY_', 'BOOKING_'
    ]
    const env = loadEnv(mode, server.config.envDir, keys)
    for (const [key, value] of Object.entries(env)) {
      if (process.env[key] === undefined) process.env[key] = value
    }

    server.middlewares.use(async (req, res, next) => {
      const [path, query] = (req.url || '').split('?')
      if (['/bookapointment', '/bookapointment/', '/bookapointment/status', '/bookapointment/status/'].includes(path)) {
        if (path.includes('/status')) res.setHeader('X-Robots-Tag', 'noindex, nofollow')
        req.url = '/bookapointment/index.html' + (query ? '?' + query : '')
        return next()
      }
      const isContact = path === '/api/contact'
      const handler = isContact ? contact : bookingApis[path]
      if (typeof handler !== 'function') return next()

      res.status = code => {
        res.statusCode = code
        return res
      }
      res.json = data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }

      if (isContact && req.method === 'POST' && req.headers['content-type']?.split(';')[0] === 'application/json') {
        try {
          req.setEncoding('utf8')
          let body = ''
          for await (const chunk of req) {
            body += chunk
            if (body.length > 16384) return res.status(413).json({ error: 'Request too large' })
          }
          req.body = JSON.parse(body)
        } catch {
          return res.status(400).json({ error: 'Invalid JSON' })
        }
      }

      try {
        await handler(req, res)
      } catch (error) {
        next(error)
      }
    })
  }

  return { name: 'local-apis', configureServer: configure, configurePreviewServer: configure }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), localApis(mode)],
  build: {
    rollupOptions: {
      input: {
        home: resolve('index.html'),
        booking: resolve('bookapointment/index.html')
      }
    }
  }
}))
