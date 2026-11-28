import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const output = new URL('../dist/bookapointment/index.html', import.meta.url);
const html = await readFile(output, 'utf8');
const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false } });
try {
  const { renderBooking } = await server.ssrLoadModule('/src/booking/render.jsx');
  if (!html.includes('<!--booking-html-->')) throw new Error('Booking HTML marker missing');
  await writeFile(output, html.replace('<!--booking-html-->', () => renderBooking()));
} finally {
  await server.close();
}
