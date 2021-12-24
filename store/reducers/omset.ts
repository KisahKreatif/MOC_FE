const initialState = {
    Omsets: {}
}

export default function omsetReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_OMSETS':
            return { ...state, Omsets: action.payload }
        default:
            return state
    }
}

export function fetchOmsets(token: any, role: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/omset/${role === 'member' ? 'user' : 'admin'}`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_OMSETS', payload: json.data })
        }
    }
}