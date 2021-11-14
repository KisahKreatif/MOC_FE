import { setCourses, setCourse, setCoursesLoading, setCourseBabs, setSubCourses } from "../actions/actionCourse"

const initialState = {
    Courses: [],
    Course: {},
    Babs: [],
    SubCourses: [],
    Loading: false
}

export default function courseReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_COURSES':
            return { ...state, Courses: action.payload }
        case 'SET_COURSE':
            return { ...state, Course: action.payload }
        case 'SET_COURSE_BABS':
            return { ...state, Babs: action.payload }
        case 'SET_SUB_COURSES':
            return { ...state, SubCourses: action.payload }
        case 'SET_COURSES_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchCourses(name: any, all: any, sort: any = '', limit: any = 9) {
    return async (dispatch: any) => {
        dispatch(setCoursesLoading(true))
        const res = await fetch(`${process.env.apiUrl}/product/course?name=${name}&all=${all}&sort=${sort}&limit=${limit}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            if (sort?.length > 0) {
                dispatch(setCourses(json.data))
            } else dispatch(setCourses(json.data.data))
        }

        dispatch(setCoursesLoading(false))
    }
}

export function fetchCourse(id: any) {
    return async (dispatch: any) => {
        dispatch(setCoursesLoading(true))
        const res = await fetch(`${process.env.apiUrl}/product/course?id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setCourse(json.data))
        } else dispatch(setCourse({}))

        dispatch(setCoursesLoading(false))
    }
}

export function fetchCourseBabs(course_id: any, name: string = '', id: any = '') {
    return async (dispatch: any) => {
        dispatch(setCoursesLoading(true))
        const res = await fetch(`${process.env.apiUrl}/bab-course?course_id=${course_id}&name=${name}&id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200 && json?.data?.data) {

            dispatch(setCourseBabs(json?.data?.data))
        }

        dispatch(setCoursesLoading(false))
    }
}

export function fetchSubCourses(bab_id: any, name: string = '', id: any = '') {
    return async (dispatch: any) => {
        dispatch(setCoursesLoading(true))
        const res = await fetch(`${process.env.apiUrl}/sub-course?bab_id=${bab_id}&name=${name}&id=${id}`)
        const json = await res.json()

        if (json.meta.code === 200 && json?.data?.data) {

            dispatch(setSubCourses(json?.data?.data))
        }

        dispatch(setCoursesLoading(false))
    }
}
