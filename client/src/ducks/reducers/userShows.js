const initialState = {
    binged: [],
    wannaBinge: [],
    currentlyBingeing: []
}

const UPDATE_BINGED = 'UPDATE_BINGED'
const UPDATE_WANNA_BINGE = 'UPDATE_WANNA_BINGE'
const UPDATE_CURRENTLY_BINGEING = 'UPDATE_CURRENTLY_BINGEING'
const RESET_USER_SHOWS = 'RESET_USER_SHOWS'

function userShows(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BINGED:
            return { ...state, binged: state.binged.concat(action.payload) }

        case UPDATE_WANNA_BINGE:
            return { ...state, wannaBinge: state.wannaBinge.concat(action.payload) }

        case UPDATE_CURRENTLY_BINGEING:
            return { ...state, currentlyBingeing: state.currentlyBingeing.concat(action.payload) }

        case RESET_USER_SHOWS:
            return initialState

        default: return state
    }
}

export function updateBinged(results) {
    return {
        type: UPDATE_BINGED,
        payload: results
    }
}

export function updateWannaBinge(results) {
    return {
        type: UPDATE_WANNA_BINGE,
        payload: results
    }
}

export function updateCurrentlyBingeing(results) {
    return {
        type: UPDATE_CURRENTLY_BINGEING,
        payload: results
    }
}

export function resetUserShows() {
    return {
        type: RESET_USER_SHOWS,
    }
}

export default userShows