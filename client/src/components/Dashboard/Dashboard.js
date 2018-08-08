import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchingPopularShows, popularShowsFetchSuccess, popularShowsFetchFailure } from '../../ducks/reducers/popular'
import { updateSelectedShow } from '../../ducks/reducers/selected'

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
                        {this.props.popularShows ? this.props.popularShows.map((show) => (
                            <div
                                key={show.id}
                                onMouseOver={() => this.setState({ [show.id]: true })}
                                onMouseLeave={() => this.setState({ [show.id]: false })}
                                id={show.id}
                                onClick={(e) => {
                                    this.setState({ showId: e.target.id });
                                    this.props.updateSelectedShow(e.target.id)
                                }}
                                style={{
                                    backgroundImage: `url(${BASE_IMG_URL}${show.poster_path}`,
                                    width: '20%',
                                    minWidth: '450px',
                                    height: 700,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: this.state[show.id] ? 'rgba(40, 40, 40, 0.3)' : 'rgba(40, 40, 40, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                {this.state[show.id] ?
                                    <div style={{
                                        backgroundColor: '#282828',
                                        width: '70%',
                                        padding: '20px',
                                    }} >
                                        <h1 style={{ color: 'white', fontSize: '3em' }}>{show.original_name}</h1>
                                        <p style={{
                                            color: 'white',
                                            fontFamily: 'Raleway',
                                        }} >{show.overview}</p>
                                        <div className='dropdown' >
                                            <button className='dropdown-button' >Add To List</button>
                                            <div className='dropdown-content'>
                                                <button onClick={() => this.addToList(show.id, 'Wanna Binge')} href="#">Wanna Binge</button>
                                                <button onClick={() => this.addToList(show.id, 'Currently Bingeing')} href="#">Currently Bingeing</button>
                                                <button onClick={() => this.addToList(show.id, 'Binged')} href="#">Binged</button>
                                            </div>
                                        </div>
                                    </div>
                                    : null}

                            </div>
                        )) : null
                        }
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

export default connect(mapStateToProps, { fetchingPopularShows, popularShowsFetchSuccess, popularShowsFetchFailure, updateSelectedShow })(Dashboard)

