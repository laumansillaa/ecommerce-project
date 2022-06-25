import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { logout } from "../../actions";
import { useDispatch } from "react-redux";

const Home = () => {

    const dispatch = useDispatch;

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then(window.localStorage.setItem('auth', false))
        dispatch(logout)
    }

    return (

        <div>
            Ingreso
            <div>
                <a href="/register" onClick={handleLogOut} >Logout</a>
            </div>
        </div>

    )
}


export default Home;