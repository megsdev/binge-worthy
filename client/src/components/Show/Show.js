import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from '../Button/Button'
import fetchShow from '../../api/fetchShow'
import { updateSelectedShow } from '../../ducks/reducers/selected'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'


class Show extends Component {

    componentDidMount = () => {
        fetchShow(this.props.match.params.showid)
            .then(response => {
                this.props.updateSelectedShow(response.data)
            })
    }

    render() {
        console.log('props on show', this.props);


        return this.props.selectedShow ? (
            <div>
                <div style={{
                    backgroundImage: `url(${BASE_IMG_URL}${this.props.selectedShow.backdrop_path}`,
                    width: '100vw',
                    minWidth: '350px',
                    height: '80vh',
                    minHeight: '350px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>

                </div >
                <div>
                    <h1 className='toUppercase'>{this.props.selectedShow.name}</h1>
                    <Button id={this.props.selectedShow.id} />
                    <h2>{this.props.selectedShow.number_of_seasons} Seasons</h2>
                    <p>{this.props.selectedShow.overview}</p>
                </div>
            </div>
        )
            : null
    }
}

function mapStateToProps(state) {
    return { selectedShow: state.selected.selectedShow }
}


export default connect(mapStateToProps, { updateSelectedShow })(Show)