const initialState = {
    Rewards: [],
    History: []
}

export default function rewardsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_REWARDS':
            return { ...state, Rewards: action.payload }
        case 'SET_REWARDS_HISTORY':
            return { ...state, History: action.payload }
        default:
            return state
    }
}

export function fetchRewards() {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/reward`)
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_REWARDS', payload: json.data.data })
        }
    }
}
export function fetchRewardHistory(token: any) {
    return async (dispatch: any) => {
        const res = await fetch(`${process.env.apiUrl}/reward/riwayat`, { headers: { authorization: token } })
        const json = await res.json()

        if (json.meta.code === 200) {
            dispatch({ type: 'SET_REWARDS_HISTORY', payload: json.data.data })
        }
    }
}