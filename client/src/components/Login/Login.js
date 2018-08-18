import React, { Component } from 'react'
import axios from 'axios'
import imageURL from '../../api/imageURL'

class Login extends Component {
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

    loginRedirect = () => {
        window.location.href = 'http://localhost:4000/login'
    }

    render() {
        console.log('state on login', this.state)
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                backgroundColor: '#282828'
            }}>
                {this.state.popularShows.map((show) => (
                    <div
                        key={show.id}
                        style={{
                            backgroundImage: `url(${imageURL}${show.poster_path}`,
                            width: '20%',
                            height: 700,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: '0.5',
                            position: 'relative'
                        }}>
                    </div>
                ))
                }
                <div
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                    <h1
                        className='toUppercase'
                        style={{
                            fontSize: '5em',
                            color: '#D1E1E9',
                            width: '50%'
                        }}>
                        Meet your next favorite show.
                    </h1>
                    <button
                        onClick={this.loginRedirect}
                        className='login-button toUppercase'
                    >
                        Login Now
                    </button>
                </div>
            </div >
        )
    }
}

export default Login




                        // <img
                        //     onMouseOver={() => this.setState({ [show.id]: true })}
                        //     onMouseLeave={() => this.setState({ [show.id]: false })}
                        //     style={{ width: '20%', minWidth: 400 }}
                        //     key={show.id} src={BASE_IMG_URL + show.poster_path}
                        // />