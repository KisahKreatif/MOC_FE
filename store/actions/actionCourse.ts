export const setCourses = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_COURSES',
            payload: data
        })
    }
}
export const setCourse = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_COURSE',
            payload: data
        })
    }
}
export const setCourseBabs = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_COURSE_BABS',
            payload: data
        })
    }
}
export const setSubCourses = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_SUB_COURSES',
            payload: data
        })
    }
}

export const setCoursesLoading = (data: any) => {
    return (dispatch: any) => {
        return dispatch({
            type: 'SET_COURSES_LOADING',
            payload: data
        })
    }
}