const http = require('http');

const PORT = 3000;
const SUCCESS_STATUS = 200;
const NOT_FOUND_STATUS = 404;
const UTF8_TEXT = { 'Content-Type': 'text/plain; charset=utf-8' };
const RUNNING_MESSAGE = 'Servidor web en ejecución';
const NOT_FOUND_MESSAGE = 'Recurso no encontrado';

const handleRequest = (request, response) => {
  const isRootRequest = request.url === '/' && request.method === 'GET';

  if (isRootRequest) {
    response.writeHead(SUCCESS_STATUS, UTF8_TEXT);
    response.end(RUNNING_MESSAGE);
    return;
  }

  response.writeHead(NOT_FOUND_STATUS, UTF8_TEXT);
  response.end(NOT_FOUND_MESSAGE);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

