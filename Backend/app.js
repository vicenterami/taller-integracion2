const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const apiRoutes = require('./routes/api');
const EnvioCorreo = require('./services/EnvioCorreo');
const cron = require('node-cron');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRoutes);

//const now = new Date();
//const serverHour = now.getHours();

//console.log(serverHour)

//const hoursUntil8PM = (8 - serverHour + 24) % 24;

//console.log(hoursUntil8PM)

//cron.schedule(`0 ${hoursUntil8PM} * * *`, () => {
  //console.log('Ejecutando sendReminders a las 8:00 PM (hora del servidor)');
  //EnvioCorreo();
//});
//EnvioCorreo()

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
