const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const apiRoutes = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Rutas API
app.use('/api', apiRoutes);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
