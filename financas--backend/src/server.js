const express = require('express');
const cors = require('cors');
const router = require('./routes');
const conn = require('./configs/authConfig');

const app = express();
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

conn();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});