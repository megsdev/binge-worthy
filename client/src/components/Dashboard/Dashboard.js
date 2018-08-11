import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchingPopularShows, popularShowsFetchSuccess, popularShowsFetchFailure } from '../../ducks/reducers/popular'
import Result from '../Result/Result'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            popularShows: [],
            showId: null
        }
    }

    componentDidMount = () => {
        this.fetchPopularShows()
    }

    fetchPopularShows = () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/popular?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US&page=1'
        }).then(response => {
            this.props.popularShowsFetchSuccess(response.data.results)
        }).catch(response => this.props.popularShowsFetchFailure())
    }

    render() {
        // console.log('props on dash', this.props)
        return this.state.showId ? (
            <Redirect to={`/show/${this.state.showId}`} />
        ) :
            (
                <div >
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', justifyContent: 'center'
                    }}>
                        {!this.props.error ? null :
                            <div style={{ color: 'red' }}>
                                {this.props.error}
                            </div>}
                        <Result shows={this.props.popularShows} />
                    </div >
                </div >
            )
    }
}

function mapStateToProps(state) {
    const { popular } = state

    return {
        popularShows: popular.popularShows,
        error: popular.error
    }
}

export default connect(mapStateToProps, { fetchingPopularShows, popularShowsFetchSuccess, popularShowsFetchFailure })(Dashboard)

