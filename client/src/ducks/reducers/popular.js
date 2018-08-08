const initialState = {
    popularShows: [],
    fetching: false,
    error: ''
}

const FETCHING_POPULAR_SHOWS = 'FETCHING_POPULAR_SHOWS'
const POPULAR_SHOWS_FETCH_SUCCESS = 'POPULAR_SHOWS_FETCH_SUCCESS'
const POPULAR_SHOWS_FETCH_FAILURE = 'POPULAR_SHOWS_FETCH_FAILURE'

function popular(state = initialState, action) {
    switch (action.type) {
        case FETCHING_POPULAR_SHOWS:
            return { ...state, fetching: true, error: '' }

        case POPULAR_SHOWS_FETCH_SUCCESS:
            return { ...state, fetching: false, popularShows: action.payload }

        case POPULAR_SHOWS_FETCH_FAILURE:
            return { ...state, fetching: false, error: 'error fetching shows' }

        default: return state
    }
}

export function fetchingPopularShows() {
    return {
        type: FETCHING_POPULAR_SHOWS,
    }
}

export function popularShowsFetchSuccess(results) {
    return {
        type: POPULAR_SHOWS_FETCH_SUCCESS,
        payload: results
    }
}

export function popularShowsFetchFailure() {
    return {
        type: POPULAR_SHOWS_FETCH_FAILURE
    }
}

export default popular
