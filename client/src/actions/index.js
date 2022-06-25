import axios from 'axios';


export function register (payload) {
    console.log('ACTIONS', payload)
    return async function (dispatch) {
        var user = await axios.post('http://localhost:3001/user/newUser', payload)
        return dispatch ({
            type: 'REGISTER',
            payload: user
        })
    }
}

export function Log (payload) {
    console.log('PASE')
    return ({
        type: 'LOG',
        payload: payload
    })
}

export function registerGoogle () {
    return ({
        type: 'REGISTER_GOOGLE',
    })
}

export function logout () {
    return ({
        type: 'LOG_OUT'
    })
}