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

    render() {
        return (
            <div className='dropdown' >
                <button className='dropdown-button' >Move Show</button>
                <div className='dropdown-content'>
                    <button onClick={() => this.moveShow(this.props.id, 'Wanna Binge')} href="#">Wanna Binge</button>
                    <button onClick={() => this.moveShow(this.props.id, 'Currently Bingeing')} href="#">Currently Bingeing</button>
                    <button onClick={() => this.moveShow(this.props.id, 'Binged')} href="#">Binged</button>
                </div>
            </div>
        )
    }

}

export default EditButton