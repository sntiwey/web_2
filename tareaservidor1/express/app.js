//aqui va un servidor express que se muestra un text plano

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola profesor, buenas tardes, espero se encuentre de todo bien');
});
const port = 3025;

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`) ;
}); 