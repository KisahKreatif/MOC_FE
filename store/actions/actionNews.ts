export const setAllNews = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_NEWS',
            payload: data
        })
    }
}
export const setDetailNews = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_DETAIL_NEWS',
            payload: data
        })
    }
}

export const setNewsLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_NEWS_LOADING',
            payload: data
        })
    }
}