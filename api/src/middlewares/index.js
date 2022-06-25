const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const admin = require('../firebase/firebase-config');


const decodeToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log('DECODE TOKEN', token)

  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    console.log("decodeValue", decodeValue);

    if (decodeValue) {
      console.log('----- FIREBASE AUTHORIZED - OK -----')
      return next();
    } else {
      console.log('----- FIREBASE UNAUTHORIZED -----')
      return res.json({message: 'Un authorize'});

    }
  } catch (error) {

    return res.json({message: 'Internal error'})
  }

}

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(cookieParser());
    app.use(morgan('dev'));
    app.use(cors());
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    //     res.header('Access-Control-Allow-Credentials', 'true');
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept', 'Authorization');
    //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    //     next();
    //   });

    
    // ---------------------
    //FIREBASE
    app.use(decodeToken);


}