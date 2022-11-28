const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// import routes modules
const userRoutes = require('./routes/users.routes');
const noteRoutes = require('./routes/notes.routes');

const app = express();
const port = process.env.PORT || 3200;

//middleware
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', noteRoutes);

//routes
app.get('/', (req, res) =>{
    res.send('API rest Notesown');
});

//mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor iniciado en el puerto', port));