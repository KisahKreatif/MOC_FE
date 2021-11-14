export const setCurrentUser = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_CURRENT_USER',
            payload: data
        })
    }
}

export const setUsers = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_USERS',
            payload: data
        })
    }
}

export const setUser = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_USER',
            payload: data
        })
    }
}

export const setUserLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_USER_LOADING',
            payload: data
        })
    }
}