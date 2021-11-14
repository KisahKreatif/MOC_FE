import { setPakets, setPaket, setPaketsLoading } from "../actions/paket"

const initialState = {
    Pakets: [],
    Paket: {},
    Loading: false
}

export default function paketReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_PAKETS':
            return { ...state, Pakets: action.payload }
        case 'SET_PAKET':
            return { ...state, Paket: action.payload }
        case 'SET_PAKETS_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchPakets(name: any = '', sort: any = '') {
    return async (dispatch: any) => {
        dispatch(setPaketsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/paket?name=${name}&sort=${sort}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setPakets(json.data.data))
        }

        dispatch(setPaketsLoading(false))
    }
}

export function fetchPaket(id: any) {
    return async (dispatch: any) => {
        dispatch(setPaketsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/paket?id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setPaket(json.data))
        } else dispatch(setPaket({}))

        dispatch(setPaketsLoading(false))
    }
}
