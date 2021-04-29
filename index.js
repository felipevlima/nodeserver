const express = require('express');
const serverData = require('./server.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hellos')
})

app.get('/episodes', (req, res) => {
  res.send(serverData);
});

app.listen(process.env.PORT || 3000);