import { setProducts, setProduct, setProductsLoading } from "../actions/actionProduct"

const initialState = {
    Products: [],
    Product: {},
    Loading: false
}

export default function productReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, Products: action.payload }
        case 'SET_PRODUCT':
            return { ...state, Product: action.payload }
        case 'SET_PRODUCTS_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchProducts(name: any, all: any, category: any = '') {
    return async (dispatch: any) => {
        dispatch(setProductsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/product/fisik?name=${name}&all=${all}&category=${category}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setProducts(json.data.data))
        }

        dispatch(setProductsLoading(false))
    }
}

export function fetchProduct(id: any) {
    return async (dispatch: any) => {
        dispatch(setProductsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/product/fisik?id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setProduct(json.data))
        } else dispatch(setProduct({}))

        dispatch(setProductsLoading(false))
    }
}
