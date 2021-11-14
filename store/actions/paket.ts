export const setPakets = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PAKETS',
            payload: data
        })
    }
}
export const setPaket = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PAKET',
            payload: data
        })
    }
}

export const setPaketsLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_PAKET_LOADING',
            payload: data
        })
    }
}