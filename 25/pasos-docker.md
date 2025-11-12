1. Ejecuta `docker build -t app-express .` en la carpeta del proyecto.
2. Inicia el contenedor con `docker run -d -p 3000:3000 --name app-express-container app-express`.
3. Confirma que el servicio responde visitando `http://localhost:3000` o ejecutando `curl http://localhost:3000`.

