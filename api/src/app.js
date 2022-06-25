const app = require('express')();
// const cors = require('cors');


app.name = 'SERVER';
app.set('port', process.env.PORT || 3001);

require('./middlewares')(app);
require('./routes')(app);

// app.use(cors());
app.use((err, req, res, next) => {
    console.log('------ ERROR CATCHING ENDWARE ------');
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    return res.status(status).send(message);
})


module.exports = app;