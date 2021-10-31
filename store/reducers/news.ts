import { setAllNews, setDetailNews, setNewsLoading } from "../actions/actionNews"

const initialState = {
    News: [],
    DetailNews: {},
    Loading: false
}

export default function newsReducers(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_NEWS':
            return { ...state, News: action.payload }
        case 'SET_DETAIL_NEWS':
            return { ...state, DetailNews: action.payload }
        case 'SET_NEWS_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchNews(title: any, all: any) {
    return async (dispatch: any) => {
        dispatch(setNewsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/news?judul=${title}&all=${all}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setAllNews(json.data.data))
        }

        dispatch(setNewsLoading(false))
    }
}

export function fetchNewsDetail(id: any) {
    return async (dispatch: any) => {
        dispatch(setNewsLoading(true))
        const res = await fetch(`${process.env.apiUrl}/news?id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setDetailNews(json.data))
        } else dispatch(setDetailNews({}))

        dispatch(setNewsLoading(false))
    }
}
