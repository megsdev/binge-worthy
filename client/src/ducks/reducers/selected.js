const initialState = {
    selectedShow: null
}

const UPDATE_SELECTED_SHOW = 'UPDATE_SELECTED_SHOW'

function selected(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECTED_SHOW:
            return { selectedshow: action.payload }

        default: return state
    }
}

export function updateSelectedShow(results) {
    return {
        type: UPDATE_SELECTED_SHOW,
        payload: results
    }
}

export default selected