const initialState = {
    user: [],
    session: false
}

function rootReducer (state= initialState, action) {
    
    switch(action.type) {
        case 'REGISTER':
            console.log('INITIALSTATE', initialState)
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN': {
            return {
                ...state,
                session: true
            }
        }
        case 'LOG': 
        console.log('INITIALSTATE', initialState)
        console.log('ENTRE ACA')
            return {
                ...state,
                user: action.payload,
                session: true
            }
        case 'LOG_OUT':
            return {
                session: false
            }
        default :
            return state;
    }
}


export default rootReducer;