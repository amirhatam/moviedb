import React, { Component } from "react";
import Card from "../components/Card";

export default class Favorites extends Component {
  state = {
    movies: [],
    favIDs: this.getStorage(),
    message: "",
    indexFirstMovieOfCurrentBattle: 0,
  };

  getStorage() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    // console.log("Favorites getStorage movie id", favorites);
    return favorites;
    
  }

  onClick = () => {
    this.setState({
      movies: [],
    });
    return localStorage.clear();
  };

  updateIndexMovieBattle = (movieId) => {
    // console.log("updateIndexMovieBattle", movieId);

    const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    
      if (idsFavorites.includes(movieId)) {
        idsFavorites.pop(movieId);
        
        localStorage.setItem("favorites", JSON.stringify(idsFavorites));
      }
      console.log("idsFavorites", idsFavorites);
   
  };

  getMovie(id) {
    const apiKey = "e441f8a3a151d588a4932d2c5d310769";

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Favorites fetch", data)
        this.setState({
          movies: [...this.state.movies, data],
        });
      });
  }

  componentDidMount() {
    if (!this.state.favIDs) {
      return this.setState({
        message: "Try to Select Movie ...",
      });
    } else {
      this.state.favIDs.map((item) => {
        return this.getMovie(item);
      });
    }
  }

  render() {

    const { indexFirstMovieOfCurrentBattle } = this.state;

    return (
      <div>
        <div className="form text-center">
          <h1 className="mt-4 font-weight-light ">Favorites</h1>
          <button
            className="btn btn-outline-danger mx-2 my-5"
            onClick={this.onClick}
          >
            Clear list
          </button>
          <button
            className="btn btn-outline-danger mx-2 my-5"
            onClick={() =>
              this.updateIndexMovieBattle(
                this.state.movies[indexFirstMovieOfCurrentBattle].id
              )
            }
          >
            Remove Last One
          </button>
        </div>
        <h4 className="mt-4 font-weight-light text-center">
          {this.state.message}
        </h4>
        <div className="m-5">
          {this.state.movies.map((elem, index) => {
            return (
              <Card
                key={index}
                poster_path={elem.poster_path}
                title={elem.title}
                release_date={elem.release_date}
                overview={elem.overview}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
