import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import EditButton from '../Button/EditButton'
import DeleteButton from '../Button/DeleteButton'
import imageURL from '../../api/imageURL'
import './Result.css'

class Result extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return !this.props.alternative ? (
            this.props.shows ? this.props.shows.map((show) => (

                <Link
                    to={`/show/${show.id}`}
                    key={show.id}
                    onMouseOver={() => this.setState({ [show.id]: true })}
                    onMouseLeave={() => this.setState({ [show.id]: false })}
                    id={show.id}
                    className='show'
                    style={{
                        backgroundImage: `url(${imageURL}${show.poster_path}`
                    }}>

                    {this.state[show.id] ?
                        <div
                            //style={styles.popupBox} 
                            className='popupBox' >
                            <h1
                                //style={styles.showName} 
                                className='showName' >{show.original_name}</h1>
                            <p
                                //style={styles.showOverview} 
                                className='showOverview' >{show.overview}</p>
                            <Button id={show.id} />
                        </div>
                        : null}

                </Link>

            )) : null

        )
            : (
                this.props.shows ? this.props.shows.map((show) => (
                    <Link
                        to={`/show/${show.id}`}
                        key={show.id}
                        onMouseOver={() => this.setState({ [show.id]: true })}
                        onMouseLeave={() => this.setState({ [show.id]: false })}
                        id={show.id}
                        style={{
                            backgroundImage: `url(${imageURL}${show.poster_path}`
                        }}
                        className='showAlternative'
                    >
                        {this.state[show.id] ?
                            <div
                                //style={styles.alternativeButtonsContainer} 
                                className='alternativeButtonsContainer' >
                                <DeleteButton id={show.id} />
                                <EditButton id={show.id} />
                            </div>
                            : null}

                    </Link>
                )) : null
            )

    }
}

// let styles = {
//     show: {
//         width: '20%',
//         minWidth: '450px',
//         height: 700,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         //backgroundColor: this.state[show.id] ? 'rgba(40, 40, 40, 0.3)' : 'rgba(40, 40, 40, 1)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     popupBox: {
//         backgroundColor: '#282828',
//         width: '70%',
//         padding: '20px',
//     },
//     showName: {
//         color: 'white', fontSize: '100%'
//     },
//     showOverview: {
//         color: 'white',
//         fontFamily: 'Raleway',
//         fontSize: '50%'
//     },
//     showAlternative: {
//         width: '5%',
//         minWidth: '300px',
//         height: '450px',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     alternativeButtonsContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//     },

// }

export default Result