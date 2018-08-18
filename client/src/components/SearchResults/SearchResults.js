import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Result from '../Result/Result'

class SearchResults extends Component {
    constructor() {
        super()

        this.state = {
            something: ''
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: '/me'
        }).then(response => {
            console.log('response', response)
        })
    }

    render() {
        // console.log('props', this.props)
        return (
            <div style={styles.resultsPage}>
                {this.props.search.results && this.props.search.results.data ? (
                    <div style={styles.resultsContainer}>

                        <Result shows={this.props.search.results.data.results} />
                    </div >
                ) : <div>no results</div>}

            </div>
        )
    }
}

let styles = {
    resultsPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        marginTop: '150px',
    },
    resultsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'center'
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(SearchResults)