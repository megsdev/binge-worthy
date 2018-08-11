import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'

class Result extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            this.props.shows ? this.props.shows.map((show) => (
                <Link
                    to={`/show/${show.id}`}
                    key={show.id}
                    onMouseOver={() => this.setState({ [show.id]: true })}
                    onMouseLeave={() => this.setState({ [show.id]: false })}
                    id={show.id}
                    style={{
                        backgroundImage: `url(${BASE_IMG_URL}${show.poster_path}`,
                        width: '20%',
                        minWidth: '450px',
                        height: 700,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        //backgroundColor: this.state[show.id] ? 'rgba(40, 40, 40, 0.3)' : 'rgba(40, 40, 40, 1)',
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
                            <Button id={show.id} />
                        </div>
                        : null}

                </Link>
            )) : null

        )
    }
}

export default Result