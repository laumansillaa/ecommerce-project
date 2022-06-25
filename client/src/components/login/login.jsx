import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../../firebase/firebase-config'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {registerGoogle, Log} from '../../actions';

//({token})
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const token = window.localStorage.getItem('token')

    const loginWithGoogle = () => {
        firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((userCred) => {
            if (userCred) {
                setAuth(true)
                window.localStorage.setItem('auth', true)
                dispatch(registerGoogle())
                navigate("/in/home")
            }
            console.log('CRED GOOGLE', userCred)
        })
    }

    const data = {
        email: email,
        password: password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios({
                method: 'post',
                data: {
                    email: email,
                    password: password
                },
                url: `http://localhost:3001/user/login`,
                headers: {
                    authorization: "Bearer " + token
                }
            })
            console.log('RESPONSE', response)

            if (response.status == 200) {
                await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log('USERCRED', userCredential)
                })

                dispatch(Log(token))
                navigate("/in/home")
            }

        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>
            <h1>Login</h1>
            <div>
                <form>
                    <input type='email' name='email' placeholder='Email' required onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type='password' name='password' placeholder='Password' required onChange={(e) => {setPassword(e.target.value)}} />
                    <div>
                        <button type='submit' onClick={(e) => {handleSubmit(e)}}> Ingresar </button>
                    </div>
                </form>
            </div>

            <div>
                <h2>Ingresar con Google</h2>
                <button onClick={loginWithGoogle} >Login Google</button>
            </div>
        </div>
    )

}

export default Login