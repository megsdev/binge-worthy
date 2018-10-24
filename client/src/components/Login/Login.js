import React, { Component } from "react";
import axios from "axios";
import imageURL from "../../api/imageURL";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      popularShows: []
    };
  }

  componentDidMount = () => {
    this.fetchPopularShows();
  };

  fetchPopularShows = () => {
    axios({
      method: "GET",
      url:
        "https://api.themoviedb.org/3/tv/popular?api_key=93b28d68c5a5b44af2e7b2b65e2e4ee6&language=en-US&page=1"
    }).then(response => {
      this.setState({ popularShows: response.data.results });
    });
  };

  loginRedirect = () => {
    window.location.href = "165.227.10.75:4000/login";
  };

  render() {
    console.log("state on login", this.state);
    return (
      <div style={styles.container}>
        {this.state.popularShows.map(show => (
          <div
            key={show.id}
            style={{
              ...styles.posters,
              backgroundImage: `url(${imageURL}${show.poster_path}`
            }}
          />
        ))}
        <div style={styles.loginContainer}>
          <h1 className="toUppercase" style={styles.headline}>
            Meet your next favorite show.
          </h1>
          <button
            onClick={this.loginRedirect}
            className="toUppercase"
            style={styles.loginButton}
          >
            Login Now
          </button>
        </div>
      </div>
    );
  }
}

let styles = {
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    backgroundColor: "#282828"
  },
  posters: {
    width: "20%",
    height: 700,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: "0.5",
    position: "relative"
  },
  loginContainer: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontSize: "5em",
    color: "#D1E1E9",
    width: "50%"
  },
  loginButton: {
    background: "#337D8A",
    border: "0 none",
    width: "200px",
    height: "100px",
    cursor: "pointer",
    color: "#D1E1E9",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "20px"
  }
};

export default Login;
