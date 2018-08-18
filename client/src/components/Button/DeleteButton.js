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

    handleDeleteShow = (type) => (event) => {
        event.preventDefault();
        this.deleteShow(this.props.id, type);
        window.location.reload();
    }

    render() {
        return (
            <div className='dropdown' >
                <button
                    className='dropdown-button'
                    onClick={this.handleDeleteShow(this.props.id)}
                    href='#'
                >Delete Show</button>
            </div>
        )
    }

}

export default DeleteButton