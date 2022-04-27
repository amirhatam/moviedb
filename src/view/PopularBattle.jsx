import React, { Component } from "react";

import Card from "../components/Card";

class PopularBattle extends Component {
  state = {
    movies: [],
    indexFirstMovieOfCurrentBattle: 0,
  };

  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  }

  updateIndexMovieBattle = (movieId) => {
    const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!idsFavorites.includes(movieId)) {
      idsFavorites.push(movieId);

      localStorage.setItem("favorites", JSON.stringify(idsFavorites));
    }

    this.setState({
      indexFirstMovieOfCurrentBattle:
        this.state.indexFirstMovieOfCurrentBattle + 2,
    });
  };

  renderTwoMovies() {
    const { indexFirstMovieOfCurrentBattle } = this.state;
    return (
      <>
        <div
          className="btn btn-outline-info offset-1 m-5 col-5"
          onClick={() =>
            this.updateIndexMovieBattle(
              this.state.movies[indexFirstMovieOfCurrentBattle].id
            )
          }
        >
          <Card
            title={this.state.movies[indexFirstMovieOfCurrentBattle].title}
            poster_path={
              this.state.movies[indexFirstMovieOfCurrentBattle].poster_path
            }
            release_date={
              this.state.movies[indexFirstMovieOfCurrentBattle].release_date
            }
            overview={
              this.state.movies[indexFirstMovieOfCurrentBattle].overview
            }
          />
        </div>
        <div
          className="btn btn-outline-info m-5 col-5"
          onClick={() =>
            this.updateIndexMovieBattle(
              this.state.movies[indexFirstMovieOfCurrentBattle + 1].id
            )
          }
        >
          {/* <Favorites id={this.state.id} /> */}
          <Card
            title={this.state.movies[indexFirstMovieOfCurrentBattle + 1].title}
            poster_path={
              this.state.movies[indexFirstMovieOfCurrentBattle + 1].poster_path
            }
            release_date={
              this.state.movies[indexFirstMovieOfCurrentBattle + 1].release_date
            }
            overview={
              this.state.movies[indexFirstMovieOfCurrentBattle + 1].overview
            }
          />
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="text-center mt-4 font-weight-light">Popular Battle</h1>
        <div className="row justify-content-center ">
          {this.state.indexFirstMovieOfCurrentBattle > 19 ? (
            "Vous avez parcouru tous les films "
          ) : (
            <div className="row ">
              {this.state.movies.length !== 0
                ? this.renderTwoMovies()
                : "Please wait until the movies are loaded"}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PopularBattle;
