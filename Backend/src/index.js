// Importamos el modulo express
const express = require('express');
const cors = require('cors');

// Creamos la app Web
const app = express();

require('./database');

// Habilitamos CORS para que el frontend pueda comunicarse
app.use(cors());
app.use(express.json());
app.use(require('./routes/index.routes'));


// Definimos el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log('Server Up on port', PORT);