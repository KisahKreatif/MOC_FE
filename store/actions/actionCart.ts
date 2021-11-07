export const setCarts = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_CARTS',
            payload: data
        })
    }
}
export const setCart = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_CART',
            payload: data
        })
    }
}

export const setCartLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_CART_LOADING',
            payload: data
        })
    }
}