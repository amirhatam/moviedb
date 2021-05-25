import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class Card extends Component {
  state = {
    // image: `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`,
    title: "",
    release: "",
    overview: "",
  };

  // componentDidMount() {
  //   if (this.state.image === "https://image.tmdb.org/t/p/w300/null") {
  //     return this.setState({
  //       image:
  //         "http://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png",
  //     });
  //   } else {
  //     return this.state.image;
  //   }
  // }

  render() {

    const image = this.props.poster_path ?
    `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`: 
    "https://www.mupload.nl/img/zymrod6nqov9t.jpg";

    return (
      <div className=" containerCard text-center mx-2">
        <div className=" text-center my-3">
          <img src={image} alt="posters" />
        </div>

        <h4 className=" my-3"> {this.props.title}</h4>
        <h5> {this.props.release_date}</h5>
        <p className="text-justify my-3 px-5"> {this.props.overview}</p>
      </div>
    );
  }
}
