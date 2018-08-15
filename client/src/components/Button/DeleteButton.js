import React, { Component } from 'react'
import axios from 'axios'

class DeleteButton extends Component {


    deleteShow = (showId) => {
        axios({
            method: 'DELETE',
            url: '/api/list',
            data: {
                tmdb_id: showId,
            }
        })
    }

    render() {
        return (
            <div className='dropdown' >
                <button
                    className='dropdown-button'
                    onClick={() => this.deleteShow(this.props.id)}
                    href='#'
                >Delete Show</button>
            </div>
        )
    }

}

export default DeleteButton