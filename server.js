import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Sirve archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Maneja solicitudes a rutas específicas
app.get('/politica-privacidad', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'politica-privacidad.html'));
});

app.get('/aviso-legal', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'aviso-legal.html'));
});

app.get('/politica-cookies', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'politica-cookies.html'));
});

// Redirige todas las demás solicitudes a tu archivo HTML principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
