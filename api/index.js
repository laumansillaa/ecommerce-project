const server = require('./src/app.js');
const db = require('./src/db.js');
const axios = require('axios');

const { PORT } = process.env;



db.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log('Server listening on port', PORT);
    });
})