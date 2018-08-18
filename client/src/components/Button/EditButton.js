import React, { Component } from 'react'
import axios from 'axios'

class EditButton extends Component {

    moveShow = (showId, listType) => {
        axios({
            method: 'PUT',
            url: '/api/list',
            data: {
                tmdb_id: showId,
                list_type: listType
            }
        })
    }

    handleMoveShow = (type) => (event) => {
        event.preventDefault();
        this.moveShow(this.props.id, type);
        window.location.reload();
    }

    render() {
        return (
            <div className='dropdown' >
                <button className='dropdown-button' >Move Show</button>
                <div className='dropdown-content'>
                    <button onClick={this.handleMoveShow('Wanna Binge')} href="#">Wanna Binge</button>
                    <button onClick={this.handleMoveShow('Currently Bingeing')} href="#">Currently Bingeing</button>
                    <button onClick={this.handleMoveShow('Binged')} href="#">Binged</button>
                </div>
            </div>
        )
    }

}

export default EditButton