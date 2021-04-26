require('dotenv').config();

//leer el archivo server/index.js
const server =require('./server');

//Se define el puerto de la API
const PORT = process.env.PORT || 8101
server.listen(PORT, () => console.log(`Server is live at localhost: ${PORT}`))