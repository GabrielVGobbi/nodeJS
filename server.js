const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
);
requireDir('./src/models');

//Rotas
//receber todo tipo de requisições (get, post, put, delete)
app.use('/api', require("./src/routes"));

//navegador ouvir, porta 3001
app.listen(process.env.PORT || 3001);