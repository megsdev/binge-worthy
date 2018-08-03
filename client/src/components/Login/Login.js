import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    loginRedirect = () => {
        window.location.href = 'http://localhost:4000/login'
    }

    render() {
        return (
            <button onClick={this.loginRedirect}>Login Now</button>
        )
    }
}

export default Login