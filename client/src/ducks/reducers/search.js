const initialState = {
    results: [],
}

const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'

function search(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_RESULTS:
            return Object.assign({}, state, { results: action.payload })

        default: return state
    }
}

export function updateSearchResults(results) {
    return {
        type: UPDATE_SEARCH_RESULTS,
        payload: results
    }
}

export default search