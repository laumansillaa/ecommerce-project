require('dotenv').config();
const admin = require("firebase-admin");
const { applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require("firebase-admin/firestore")


// const serviceAccount = require("./serviceAccount.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

admin.initializeApp({
  credential: applicationDefault()
})

const db = getFirestore()

module.exports = {admin, db};