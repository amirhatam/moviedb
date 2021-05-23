import React, { Component } from "react";
import Card from "../components/Card";

const moment = require("moment");

export default class Weekly extends Component {
  state = {
    movies: [],
  };

  formatDateToday(dateString) {
    const today = moment(dateString).format("YYYY-MM-DD");
    return today;
  }
  formatDateLastWeek(dateString) {
    const lastWeek = moment(dateString)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    return lastWeek;
  }

  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" +
        this.formatDateLastWeek() +
        "&primary_release_date.lte=" +
        this.formatDateToday() +
        "&api_key=e441f8a3a151d588a4932d2c5d310769"
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
        <h1 className="text-center mt-4 font-weight-light ">Weekly Movies</h1>
        <div className=" m-5">
          {this.state.movies.map((elem, index) => {
            return <Card key={index} {...elem} />;
          })}
        </div>
      </div>
    );
  }
}
