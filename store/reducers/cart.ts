import { setCarts, setCart, setCartLoading } from "../actions/actionCart"

const initialState = {
    Carts: [],
    Cart: {},
    Loading: false
}

export default function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_CARTS':
            return { ...state, Carts: action.payload }
        case 'SET_CART':
            return { ...state, Cart: action.payload }
        case 'SET_CART_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchCarts(token: any) {
    return async (dispatch: any) => {
        dispatch(setCartLoading(true))
        const res = await fetch(`${process.env.apiUrl}/cart`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setCarts(json.data.data))
        }

        dispatch(setCartLoading(false))
    }
}

export function fetchCart(id: any, token: any) {
    return async (dispatch: any) => {
        dispatch(setCartLoading(true))
        const res = await fetch(`${process.env.apiUrl}/cart?id=${id}`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setCart(json.data))
        } else dispatch(setCart({}))

        dispatch(setCartLoading(false))
    }
}
