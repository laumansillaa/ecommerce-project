const { db } = require('../../firebase/firebase-config')

module.exports = async function (req, res, next) {

    // const user = [
    //     {user:"lau"},
    //     {user:"lau2"},
    // ]

    const querySnapshot = await db.collection('users').get()
    
    const allQuerySnapshot = querySnapshot.docs.map(doc => ({
        id: doc.id
    }))

    console.log("soy headers",req.headers)

    res.status(200).json(allQuerySnapshot)


}