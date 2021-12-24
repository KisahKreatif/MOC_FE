const initialState = {
    Courses: [],
    Products: [],
    Status: [],
    FacebookPixel: [],
}

export default function comissionsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_COMISSIONS_COURSE':
            return { ...state, Courses: action.payload }
        case 'SET_COMISSIONS_PRODUCT':
            return { ...state, Products: action.payload }
        case 'SET_COMISSIONS_STATUS':
            return { ...state, Status: action.payload }
        case 'SET_COMISSIONS_FACEBOOK_PIXEL':
            return { ...state, FacebookPixel: action.payload }
        default:
            return state
    }
}

export function fetchComissionCourse() {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/admin/komisi/course`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_COURSE', payload: json.data.data })
        }
    }
}

export function fetchComissionCourseMember(token: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/user/komisi/course`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_COURSE', payload: json.data.data })
        }
    }
}

export function fetchComissionPoduct() {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/admin/komisi/fisik`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_PRODUCT', payload: json.data.data })
        }
    }
}

export function fetchComissionPoductMember(token: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/user/komisi/fisik`, { headers: { authorization: token } })

        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_PRODUCT', payload: json.data.data })
        }
    }
}

export function fetchComissionStatus(token: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/status`, {
            headers: {
                authorization: token
            }
        })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_STATUS', payload: json.data.data })
        }
    }
}

export function fetchComissionFacebookPixel() {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/afiliasi/facebook-pixel`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_COMISSIONS_FACEBOOK_PIXEL', payload: json.data.data })
        }
    }
}
