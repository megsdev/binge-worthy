import React, { Component } from 'react'
import axios from 'axios'
import { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows } from '../../ducks/reducers/userShows'
import { connect } from 'react-redux'
import fetchShow from '../../api/fetchShow'
import Result from '../Result/Result'
import './Profile.css'

class Profile extends Component {

    getShows = () => {
        axios({
            method: 'GET',
            url: '/api/list'
        })
            .then(response => {
                if (this.props.userShows) {
                    this.props.resetUserShows()
                }
                response.data.filter(show => {
                    if (show.list_type === "Binged") {
                        fetchShow(show.tmdb_id)
                            .then(response => {
                                this.props.updateBinged(response.data)
                            })
                    }
                    else if (show.list_type === "Currently Bingeing") {
                        fetchShow(show.tmdb_id)
                            .then(response => {
                                this.props.updateCurrentlyBingeing(response.data)
                            })
                    }

                    else {
                        fetchShow(show.tmdb_id)
                            .then(response => {
                                this.props.updateWannaBinge(response.data)
                            })
                    }
                })

            })
    }

    componentDidMount = () => {
        this.getShows()
    }

    render() {
        return (
            <div className='pageContainer' >
                <h2 className='listHeader'>Wanna Binge</h2>
                <section className='listContainer' >
                    <Result shows={this.props.userShows.wannaBinge}
                        alternative
                    />
                </section>
                <h2 className='listHeader' >Currently Bingeing</h2>
                <section className='listContainer'>
                    <Result
                        shows={this.props.userShows.currentlyBingeing}
                        alternative />
                </section>
                <h2 className='listHeader'>Binged</h2>
                <section className='listContainer'>
                    <Result
                        shows={this.props.userShows.binged}
                        alternative />
                </section>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        userShows: state.userShows
    }
}

let styles = {
    pageContainer: {
        backgroundColor: '#282828',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontFamily: 'Raleway',
    },
    listHeader: {
        padding: '10px'

    },
    listContainer: {
        display: 'flex',
        backgroundColor: 'black',
        minWidth: '100%',
        minHeight: '300px',
        overflowX: 'auto'
    }
}

export default connect(mapStateToProps, { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows })(Profile)