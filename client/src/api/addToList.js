import axios from 'axios'

const addToList = (showId, listType) => {
    axios({
        method: 'POST',
        url: `/api/list`,
        data: {
            tmdb_id: showId,
            list_type: listType,
        }
    })
}

export default addToList