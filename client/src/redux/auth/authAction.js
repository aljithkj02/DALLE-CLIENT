
export const login = (name) => (dispatch, getState) => {
    dispatch({
        type: 'LOGIN',
        payload: name
    })
}

export const logout = () => (dispatch, getState) => {
    return dispatch({
        type: 'LOGOUT'
    })
}