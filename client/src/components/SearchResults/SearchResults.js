import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
//testing purposes only, need to use /configuration


class SearchResults extends Component {

    addToList = (showId, listType) => {
        axios({
            method: 'POST',
            url: `/api/list`,
            data: {
                tmdb_id: showId,
                list_type: listType,
            }
        })
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: '/me'
        }).then(response => {
            console.log('responst', response)
        })
    }

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
                                            <button onClick={() => this.addToList(show.id, 'Wanna Binge')} href="#">Wanna Binge</button>
                                            <button onClick={() => this.addToList(show.id, 'Currently Bingeing')} href="#">Currently Bingeing</button>
                                            <button onClick={() => this.addToList(show.id, 'Binged')} href="#">Binged</button>
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


//STYLES FROM LOGIN PAGE - SHOWS TEXT ON HOVER
{/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {this.state.popularShows.map((show) => (
        <div
            onMouseOver={() => this.setState({ [show.id]: true })}
            onMouseLeave={() => this.setState({ [show.id]: false })}
            style={{
                backgroundImage: `url(${BASE_IMG_URL}${show.poster_path}`,
                width: '20%',
                height: 700,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: this.state[show.id] ? '0.5' : 1
            }}>
            {this.state[show.id] ? <h1 style={{ color: 'white', fontSize: '4em' }}>text</h1> : null}

        </div>
    ))
    }
</div > */}