import { setTransaction, setTransactions, setTransactionLoading } from "../actions/transaction"

const initialState = {
    Transactions: [],
    Transaction: {},
    Loading: false
}

export default function transactionReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return { ...state, Transactions: action.payload }
        case 'SET_TRANSACTION':
            return { ...state, Transaction: action.payload }
        case 'SET_TRANSACTION_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchTransaction(type: any, id: any, token: any) {
    return async (dispatch: any) => {
        dispatch(setTransactionLoading(true))
        const res = await fetch(`${process.env.apiUrl}/${type == 'marketplace' ? 'transaction-marketplace' : 'transaction'}?id=${id}`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setTransaction(json.data))
        }

        dispatch(setTransactionLoading(false))
    }
}

export function fetchTransactions(id: any, token: any, name: any = '') {
    return async (dispatch: any) => {
        dispatch(setTransactionLoading(true))
        const res = await fetch(`${process.env.apiUrl}/transaction?id=${id}&name=${name}`, { headers: { authorization: token } })
        const json = await res.json()

        if (json?.meta?.code === 200) {
            dispatch(setTransactions(json.data.data))
        }

        dispatch(setTransactionLoading(false))
    }
}
