import React, { Component } from "react";
import axios from "axios";
import fetchShow from "../../api/fetchShow";

class EditButton extends Component {
  moveShow = (showId, listType) => {
    axios({
      method: "PUT",
      url: "/api/list",
      data: {
        tmdb_id: showId,
        list_type: listType
      }
    });

    axios({
      method: "GET",
      url: "/api/list"
    }).then(response => {
      if (this.props.userShows) {
        this.props.resetUserShows();
      }
      response.data.filter(show => {
        if (show.list_type === "Binged") {
          fetchShow(show.tmdb_id).then(response => {
            this.props.updateBinged(response.data);
          });
        } else if (show.list_type === "Currently Bingeing") {
          fetchShow(show.tmdb_id).then(response => {
            this.props.updateCurrentlyBingeing(response.data);
          });
        } else {
          fetchShow(show.tmdb_id).then(response => {
            this.props.updateWannaBinge(response.data);
          });
        }
      });
    });
  };

  handleMoveShow = type => event => {
    event.preventDefault();
    this.moveShow(this.props.id, type);
    // window.location.reload();
  };

  render() {
    return (
      <div className="dropdown">
        <button className="dropdown-button">Move Show</button>
        <div className="dropdown-content">
          <button onClick={this.handleMoveShow("Wanna Binge")} href="#">
            Wanna Binge
          </button>
          <button onClick={this.handleMoveShow("Currently Bingeing")} href="#">
            Currently Bingeing
          </button>
          <button onClick={this.handleMoveShow("Binged")} href="#">
            Binged
          </button>
        </div>
      </div>
    );
  }
}

export default EditButton;
