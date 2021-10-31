import { setBanner, setDetailBanner, setBannerLoading } from "../actions/actionBanner"

const initialState = {
    Banners: [],
    DetailBanners: {},
    Loading: false
}

export default function bannerReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_BANNERS':
            return { ...state, Banners: action.payload }
        case 'SET_DETAIL_BANNERS':
            return { ...state, DetailBanners: action.payload }
        case 'SET_BANNERS_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchBanners() {
    return async (dispatch: any) => {
        dispatch(setBannerLoading(true))
        const res = await fetch(`${process.env.apiUrl}/banner`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setBanner(json.data))
        }

        dispatch(setBannerLoading(false))
    }
}

export function fetchBannersDetail(id: any) {
    return async (dispatch: any) => {
        dispatch(setBannerLoading(true))
        const res = await fetch(`${process.env.apiUrl}/banner?id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setDetailBanner(json.data))
        } else dispatch(setDetailBanner({}))

        dispatch(setBannerLoading(false))
    }
}
