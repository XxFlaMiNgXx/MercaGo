// Importamos el modulo express
const express = require('express');

// Creamos la app Web
const app = express();

require('./database');
app.use(express.json());
app.use(require('./routes/index.routes'));


// Definimos el puerto
app.listen(3000);
console.log('Server Up on port', 3000);