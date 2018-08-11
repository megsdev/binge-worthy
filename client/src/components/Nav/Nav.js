import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import { updateSearchResults } from '../../ducks/reducers/search'


//https://api.themoviedb.org/3/search/tv?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US&query=office&page=1


class Nav extends Component {
    constructor() {
        super()

        this.state = {
            searchInput: '',
            name: '',
            picture: ''
        }
    }

    handleSearchInput = text => {
        this.setState({ searchInput: text })
    }

    fetchShow = () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/tv?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US&query=' + this.state.searchInput + '&page=1'
        }).then(response => {
            this.props.updateSearchResults(response)
        }).then(() => {
            this.props.history.push('/results')
        })
    }

    getUser = () => {
        axios({
            method: 'GET',
            url: '/me'
        }).then(response => {
            this.setState({
                name: response.data.name,
                picture: response.data.picture
            })
        })
    }

    componentDidMount = () => {
        this.getUser()
    }

    render() {
        // console.log('props on nav', this.props)
        return (
            <div className='Nav'>
                <Link to='/'>
                    <h1 className='navTitle toUppercase'>Binge-worthy</h1>
                </Link>
                <div className="search">
                    <input
                        onChange={e => this.handleSearchInput(e.target.value)}
                        onKeyUp={(e) => { if (e.keyCode === 13) { this.fetchShow() } }}
                        type="text"
                        className="search_text"
                        id="search_text"
                        placeholder="Search shows"
                    />
                    <div
                        className="search-button"
                        onClick={this.fetchShow}
                    >
                        <i className="fas fa-search fa-2x" id="search_button"></i>
                    </div>
                </div>
                <Link to='/profile'>
                    <img src={this.state.picture} alt='' className='avatar' />
                </Link>
            </div>
        )
    }
}



export default connect(null, { updateSearchResults })(Nav)