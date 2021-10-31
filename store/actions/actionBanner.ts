export const setBanner = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_BANNERS',
            payload: data
        })
    }
}
export const setDetailBanner = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_DETAIL_BANNERS',
            payload: data
        })
    }
}

export const setBannerLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_BANNERS_LOADING',
            payload: data
        })
    }
}