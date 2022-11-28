const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes modules
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 3200;

//middleware
app.use(express.json());

app.use('/api', userRoutes);

//routes
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi API');
});

//mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor iniciado en el puerto', port));