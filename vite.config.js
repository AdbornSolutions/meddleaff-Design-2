/* eslint-env node */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contact from './api/contact.js'

function localContactApi(mode) {
  function configure(server) {
    const keys = ['APPS_SCRIPT_URL', 'APPS_SCRIPT_SECRET', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL']
    const env = loadEnv(mode, server.config.envDir, keys)
    for (const key of keys) {
      if (env[key] !== undefined && process.env[key] === undefined) process.env[key] = env[key]
    }

    server.middlewares.use(async (req, res, next) => {
      if (req.url?.split('?')[0] !== '/api/contact') return next()

      res.status = code => {
        res.statusCode = code
        return res
      }
      res.json = data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }

      if (req.method === 'POST' && req.headers['content-type']?.split(';')[0] === 'application/json') {
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
        await contact(req, res)
      } catch (error) {
        next(error)
      }
    })
  }

  return { name: 'local-contact-api', configureServer: configure, configurePreviewServer: configure }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), localContactApi(mode)],
}))
