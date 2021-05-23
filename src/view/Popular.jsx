import React, { Component } from "react";
import Card from "../components/Card";


export default class Popular extends Component {
  state = {
    movies: [],
    
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
    )
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          movies: data.results,
        });
      });
  }

  render() {
    return (
      <div>
         <h1 className="text-center font-weight-light mt-4">Popular Movies</h1>
          <div className="m-5 ">

            {this.state.movies.map((elem, index) => {
              return <Card key={index} {...elem} />;
            })}
          </div>
          
      </div>
    );
  }
}
