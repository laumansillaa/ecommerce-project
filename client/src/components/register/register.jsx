import React, {useState} from 'react';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { register } from '../../actions';
import { useDispatch } from 'react-redux';
import {auth} from '../../firebase/firebase-config';



const Register = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const [token, setToken] = useState('');
    
    const data = {
        name: name,
        lastname: lastname,
        email: email,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // funcion crear usuario
        try {
            dispatch(register(data))
            createUserWithEmailAndPassword(auth, data.email, data.password)//(auth, MEILAND PASSWORD)
            .then((userCredential) => {
                // setAuth(true)
                const user = userCredential.user //Info del usuario?
                console.log('USER', user.accessToken)
                window.localStorage.setItem('auth', true)          
                window.localStorage.setItem('token', user.accessToken)
            })
            .catch((error) => console.log(error))

        } catch (error) {
            console.error(error)
        }
        
    }

    return (
        <div>
            <div>
                <form >
                    <div>
                        <input type='text' name='name' placeholder='name' required onChange={(e) => {setName(e.target.value)}} />
                        <input type='text' name='lastname' placeholder='lastname' required onChange={(e) => {setLastname(e.target.value)}} />
                        <input type='email' name='email' placeholder='email' required onChange={(e) => {setEmail(e.target.value)}} />
                        <input type='password' name='password' placeholder='password' required onChange={(e) => {setPassword(e.target.value)}} />
                    </div>
                    <div>
                        <button onClick={(e) => {handleSubmit(e)}}>Register</button>
                    </div>
                </form>
                <button onClick={(e) => {handleSubmit(e)}}>BUTTON</button>
            </div>
            <a href='/login'>Tengo una cuenta</a>

        </div>
    )

}


export default Register;