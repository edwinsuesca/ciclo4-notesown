const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3200;
//routes
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API');
});

//mongobd connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor iniciado en el puerto', port));