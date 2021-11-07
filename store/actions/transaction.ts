export const setTransaction = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_TRANSACTION',
            payload: data
        })
    }
}

export const setTransactions = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_TRANSACTIONS',
            payload: data
        })
    }
}

export const setTransactionLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_TRANSACTION_LOADING',
            payload: data
        })
    }
}