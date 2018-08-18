import React, { Component } from 'react'
import addToList from '../../api/addToList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Button extends Component {
    notify = () => {
        toast('Success! 💃')
    }

    handleAddToList = (type) => (event) => {
        event.preventDefault();
        addToList(this.props.id, type);
        this.notify()
    }
    render() {

        return (
            <div className='dropdown' >
                <button className='dropdown-button' >Add To List</button>
                <div className='dropdown-content'>
                    <button onClick={this.handleAddToList('Wanna Binge')} href="#">Wanna Binge</button>
                    <button onClick={this.handleAddToList('Currently Bingeing')} href="#">Currently Bingeing</button>
                    <button onClick={this.handleAddToList('Binged')} href="#">Binged</button>
                    <ToastContainer
                        closeButton={false}
                        style={{
                            color: '#337D8A',
                            marginTop: '100px'
                        }}

                    />
                </div>
            </div>
        )
    }

}

export default Button