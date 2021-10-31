import { setCourses, setCourse, setCoursesLoading } from "../actions/actionCourse"

const initialState = {
    Courses: [],
    Course: {},
    Loading: false
}

export default function courseReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_COURSES':
            return { ...state, Courses: action.payload }
        case 'SET_COURSE':
            return { ...state, Course: action.payload }
        case 'SET_COURSES_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchCourses(name: any, all: any, sort: any = '') {
    return async (dispatch: any) => {
        dispatch(setCoursesLoading(true))
        const res = await fetch(`${process.env.apiUrl}/product/course?name=${name}&all=${all}&sort=${sort}`)
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
