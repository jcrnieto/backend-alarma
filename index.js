const server = require('./src/app');
require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3001;

server.listen(serverPort, () => {
    console.log(`Listening at port ${serverPort}`);
});

server.timeout = 10000;