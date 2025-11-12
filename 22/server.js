const express = require('express');

const app = express();
const PORT = 3000;

let isAuthenticated = false;

const authenticationMiddleware = (request, response, next) => {
  if (isAuthenticated) {
    next();
    return;
  }
  response.status(401).json({ message: 'No autorizado' });
};

app.get('/protected', authenticationMiddleware, (request, response) => {
  response.status(200).send('Acceso permitido');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

