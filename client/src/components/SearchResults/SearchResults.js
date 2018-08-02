import React, { Component } from 'react'
import { connect } from 'react-redux'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
//testing purposes only, need to use /configuration

class SearchResults extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div className='results-page'>
                {this.props.results && this.props.results.data ? (
                    <div>
                        {this.props.results.data.results.map((show) => (
                            <div className='show-container' key={show.id}>
                                <img
                                    src={BASE_IMG_URL + show.poster_path}
                                    className='poster'
                                    alt="" />
                                <div className='show-info'>
                                    <h3>{show.name}</h3>
                                    <div className='dropdown'>
                                        <button className='dropdown-button'>Add To List</button>
                                        <div className='dropdown-content'>
                                            <a href="#">Wanna Binge</a>
                                            <a href="#">Currently Bingeing</a>
                                            <a href="#">Binged</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                ) : <div>no results</div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(SearchResults)