import {Route, Routes} from 'react-router-dom';

import { useState, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase-config'
import { registerGoogle, Log } from './actions';
import Home from './components/home/home';


function App() {

  const dispatch = useDispatch()
  const session = useSelector(state => state.session)
  const [userAuth, setUserAuth] = useState(null) 
  // console.log(session)
  const [loggin, setLoggin] = useState(null)
  // const auth = window.localStorage.getItem('auth')

  useEffect(() => {
    isLogged()
  }, [session])

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUserAuth(user)
      console.log('USER', user)
    })
}, [])

  const isLogged = () => {
    if (session) {
        console.log(session, 'sessionnnnnnnnnnnnn')
        setLoggin (true)
      }

  }  


  return (
    <div className="App">
      <Routes>
        {
          !loggin ? (
            <>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/login' element={<Login/>}/>
            </>

          ) : (
            <>
            <Route exact path= '/in/home' element={<Home/>}/>
            <Route path='*' element={<Home/>}/>
            </>
          )
        }
        
        {/* <Route path='*' element={<Register/>} /> */}
        

      </Routes>

    </div>
  )
}

export default App
