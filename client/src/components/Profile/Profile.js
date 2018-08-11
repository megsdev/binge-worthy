import React, { Component } from 'react'
import axios from 'axios'
import { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows } from '../../ducks/reducers/userShows'
import { connect } from 'react-redux'
import fetchShow from '../../api/fetchShow'

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
                    else if (show.list_type === "Currently Binging") {
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
        console.log('props on profile', this.props)
        return (
            <div>
                <h2>Profile</h2>
                <h2>Wanna Binge</h2>
                <div>{this.props.userShows.wannaBinge.map(show => (
                    <p>{show.original_name}</p>
                ))}</div>

                <h2>Currently Bingeing</h2>
                <div>{}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userShows: state.userShows
    }
}

export default connect(mapStateToProps, { updateBinged, updateWannaBinge, updateCurrentlyBingeing, resetUserShows })(Profile)