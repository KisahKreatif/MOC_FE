import { setCurrentUser, setUsers } from "../actions/user"

const initialState = {
    CurrentUser: {},
    Users: [],
    User: {},
    Loading: false
}

export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, CurrentUser: action.payload }
        case 'SET_USERS':
            return { ...state, Users: action.payload }
        case 'SET_USER':
            return { ...state, User: action.payload }
        case 'SET_USER_LOADING':
            return { ...state, Loading: action.payload }
        default:
            return state
    }
}

export function fetchCurrentUser(token: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/user`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setCurrentUser(json.data))
        }

    }
}

export function fetchUsers(token: any, name: string = '', role: string = '', leaderBoard: boolean = false) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/users?name${name}&role=${role}&leader-board=${leaderBoard}`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch(setUsers(json.data.data))
        }

    }
}

