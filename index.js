const server = require('./src/app');
require('dotenv').config();
const { conn } = require('./src/db');

const serverPort = process.env.SERVER_PORT || 3001;

conn.sync({ force: false }).then(() => {
server.listen( serverPort , () => {
    console.log(`Listening at port ${ serverPort }`);
});
});

server.timeout = 10000;