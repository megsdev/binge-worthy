import React, { Component } from 'react'
import { connect } from 'react-redux'


class Show extends Component {

    render() {
        console.log('props on show', this.props);

        return (
            <div>Show</div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, null)(Show)