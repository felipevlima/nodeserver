const express = require('express');
const serverData = require('./server.json');

const app = express();

const port = 8080;

app.use(cors());

app.get('/episodes', (req, res) => {
  res.send(serverData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})