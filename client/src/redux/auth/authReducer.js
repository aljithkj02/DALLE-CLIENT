
let defaultData = {
    isAuth: false,
    name: ''
}

const authReducer = (state = defaultData, action) => {
    if(action.type === 'LOGIN'){
        return {
            ...state,
            isAuth: true,
            name: action.payload
        }
    }else if(action.type === 'LOGOUT'){
        return {
            ...state,
            isAuth: false,
            name: ''
        }
    }
    return state;
}

export default authReducer;