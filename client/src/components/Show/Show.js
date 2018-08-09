import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'


class Show extends Component {
    constructor() {
        super()

        this.state = {
            show: {}
        }
    }


    fetchShow = () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/' + this.props.selected.selectedshow + '?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US'
        }).then(response => {
            this.setState({ show: response.data })

        })
    }

    componentDidMount = () => {
        this.fetchShow()
    }

    render() {
        console.log('state on show', this.state);

        return (
            <div>
                <h1>{this.state.show.name}</h1>
                <img
                    src={BASE_IMG_URL + this.state.show.backdrop_path}
                    alt=""
                    style={{ width: '100vw' }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(Show)