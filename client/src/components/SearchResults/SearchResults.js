import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Result from '../Result/Result'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
//testing purposes only, need to use /configuration


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
            <div className='results-page'>
                {this.props.search.results && this.props.search.results.data ? (
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', backgroundColor: 'white', justifyContent: 'center'
                    }}>

                        <Result shows={this.props.search.results.data.results} />
                    </div >
                ) : <div>no results</div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(SearchResults)