export const setProducts = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PRODUCTS',
            payload: data
        })
    }
}
export const setProduct = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PRODUCT',
            payload: data
        })
    }
}

export const setProductsLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PRODUCTS_LOADING',
            payload: data
        })
    }
}