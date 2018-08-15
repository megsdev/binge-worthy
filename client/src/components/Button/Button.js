import React, { Component } from 'react'
import addToList from '../../api/addToList'

class Button extends Component {

    render() {
        console.log('props on button', this.props);

        return (
            <div className='dropdown' >
                <button className='dropdown-button' >Add To List</button>
                <div className='dropdown-content'>
                    <button onClick={() => addToList(this.props.id, 'Wanna Binge')} href="#">Wanna Binge</button>
                    <button onClick={() => addToList(this.props.id, 'Currently Bingeing')} href="#">Currently Bingeing</button>
                    <button onClick={() => addToList(this.props.id, 'Binged')} href="#">Binged</button>
                </div>
            </div>
        )
    }

}

export default Button