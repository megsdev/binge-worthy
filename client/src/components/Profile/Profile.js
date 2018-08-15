import React, { Component } from 'react'
import axios from 'axios'
import { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows } from '../../ducks/reducers/userShows'
import { connect } from 'react-redux'
import fetchShow from '../../api/fetchShow'
import Result from '../Result/Result'

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
            <div style={styles.pageContainer} >
                <h2 style={styles.listHeader}>Wanna Binge</h2>
                <div style={styles.listContainer} >
                    <Result shows={this.props.userShows.wannaBinge} alternative />
                </div>
                <h2 style={styles.listHeader} >Currently Bingeing</h2>
                <div style={styles.listContainer}>
                    <Result shows={this.props.userShows.currentlyBingeing} alternative />
                </div>
                <h2 style={styles.listHeader}>Binged</h2>
                <div style={styles.listContainer}>
                    <Result shows={this.props.userShows.binged} alternative />
                </div>
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
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}

export default connect(mapStateToProps, { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows })(Profile)