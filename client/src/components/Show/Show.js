import React, { Component } from 'react'
import { connect } from 'react-redux'
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
            <div style={{ display: 'flex', }}>
                <div style={styles.showInfoContainer}>
                    <h1
                        className='toUppercase'
                        style={styles.whiteText}
                    >{this.props.selectedShow.name}</h1>
                    <Button id={this.props.selectedShow.id} />
                    <h2 style={styles.whiteText} >{this.props.selectedShow.number_of_seasons} Season(s)</h2>
                    <p style={styles.whiteText} >{this.props.selectedShow.overview}</p>
                    <p style={styles.whiteText} >Creator: {this.props.selectedShow.created_by.map((person) => (person.name + ' '))} </p>
                    <p style={styles.whiteText} >Genre: {this.props.selectedShow.genres.map((genre) => (genre.name + ' '))} </p>
                    <a href={this.props.selectedShow.homepage}>
                        <img
                            src={`${BASE_IMG_URL}${this.props.selectedShow.networks[0].logo_path}`}
                            alt=""
                            style={styles.networkButton}
                        />
                    </a>
                </div>
                <div style={{
                    ...styles.heroImage, backgroundImage: `url(${BASE_IMG_URL}${this.props.selectedShow.backdrop_path}`
                }}>

                </div >
            </div>
        )
            : null
    }
}

function mapStateToProps(state) {
    return { selectedShow: state.selected.selectedShow }
}

let styles = {
    heroImage: {
        width: '75%',
        minWidth: '350px',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    showInfoContainer: {
        backgroundColor: '#282828',
        width: '25%',
        height: '100vh',
        padding: '30px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white',
        fontFamily: 'Raleway'
    },
    networkButton: {
        width: '100px'
    }
}

export default connect(mapStateToProps, { updateSelectedShow })(Show)