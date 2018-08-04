import React, { Component } from 'react'
import axios from 'axios'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            popularShows: []
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
            this.setState({ popularShows: response.data.results })
        })
    }

    render() {
        console.log('state on dash', this.state)
        return (
            <div >
                <h1>Popular Shows</h1>
                <div style={{
                    display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', justifyContent: 'center'
                }}>
                    {this.state.popularShows.map((show) => (
                        <div
                            key={show.id}
                            onMouseOver={() => this.setState({ [show.id]: true })}
                            onMouseLeave={() => this.setState({ [show.id]: false })}
                            style={{
                                backgroundImage: `url(${BASE_IMG_URL}${show.poster_path}`,
                                width: '20%',
                                minWidth: '450px',
                                height: 700,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: this.state[show.id] ? '0.3' : 1,
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
                    ))
                    }
                </div >
            </div >
        )
    }
}

export default Dashboard