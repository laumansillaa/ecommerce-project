const { db } = require('../../firebase/firebase-config')
const { compareSync } = require('bcrypt');


module.exports = async function (req, res, next) {
    console.log("----- LOGIN ROUTE -----");

    try {

        const {email, password} = req.body;
        const user = await db.collection('users').where('email', '==', email).get();
        
        // const data = user.docs[0].data().password

        console.log('USER', user.docs[0].data())
        if (user.empty) {
            console.log('EMAIL IS REQUERID')
            res.status(404).send('Email is requerid')
        } else if (password !== user.docs[0].data().password) {
            console.log('PASSWORD INVALID')
            res.status(404).send('Password invalid');
            
        // } else if (!compareSync(password, user.docs[0].data().password)) {
        //     console.log('PASSWORD INVALID')
        //     res.status(404).send('Password invalid');
        } else {
            console.log('Log exitoso')
            res.status(200).send('Login existoso')
        }

    } catch (error) {
        next(error)
    }

}