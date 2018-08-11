import axios from 'axios'

const fetchShow = (params) => {
    return axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/' + params + '?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US'
    })
}


export default fetchShow