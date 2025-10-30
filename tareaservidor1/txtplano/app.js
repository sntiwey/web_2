//aqui ira el http que muestre un texto plano

const http = require('http');
const port = 3026;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hola profesor aaron, espero que estes bien, este es un texto plano");
});

server.listen(port, () => {
    console.log(`Server: http://127.0.0.1:${port}`);
});
