const bcrypt = require('bcrypt')
const { db } = require('../../firebase/firebase-config')

// const {where} = require( "firebase-admin/firestore")

module.exports = async function (req, res, next) {
    console.log("----- NEW USER ROUTE -----");

    try {

        const {name, lastname, email, password} = req.body
        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(password, salt)
    
        const userExists = await db.collection('users').where('email', '==', email).get();
    
        if (!userExists.empty) {
    
            res.status(404).send('Email registred')
    
        } else {
            
            
                await db.collection('users').add({
                    name,
                    lastname,
                    email,
                    password
                })
                console.log('NEW CONTACT')
                res.status(202).send('New contact')
    
        }
    } catch (error) {
        next(error)
    }

}