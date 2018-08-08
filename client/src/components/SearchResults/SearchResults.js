import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
//testing purposes only, need to use /configuration


class SearchResults extends Component {
    constructor() {
        super()

        this.state = {
            something: ''
        }
    }

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
        // console.log('props', this.props)
        return (
            <div className='results-page'>
                {this.props.search.results && this.props.search.results.data ? (
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', justifyContent: 'center'
                    }}>
                        {this.props.search.results.data.results.map((show) => (
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
                                    opacity: this.props[show.id] ? '0.3' : 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                {this.props[show.id] ?
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
                ) : <div>no results</div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(SearchResults)

// {this.props.results && this.props.results.data ? (
//     <div>
//         {this.props.results.data.results.map((show) => (
//             <div className='show-container' key={show.id}>
//                 <img
//                     src={BASE_IMG_URL + show.poster_path}
//                     className='poster'
//                     alt="" />
//                 <div className='show-info'>
//                     <h3>{show.name}</h3>
//                     <div className='dropdown'>
//                         <button className='dropdown-button'>Add To List</button>
//                         <div className='dropdown-content'>
//                             <button onClick={() => this.addToList(show.id, 'Wanna Binge')} href="#">Wanna Binge</button>
//                             <button onClick={() => this.addToList(show.id, 'Currently Bingeing')} href="#">Currently Bingeing</button>
//                             <button onClick={() => this.addToList(show.id, 'Binged')} href="#">Binged</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         ))}
//     </div>
// ) : <div>no results</div>}