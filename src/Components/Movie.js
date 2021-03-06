import React, { Component } from 'react';
const axios = require('axios');

export class Movie extends Component {
  constructor()
  {
    super();
    this.state = {
      src: '',
      title: '',
      director: '',
      imdb: '',
      plot: '',
    }
  }

  dimPoster(e) {
    e.target.style.opacity = 0.7;
  }

  resetPoster(e) {
    e.target.style.opacity = 1;
  }

  getMovieInfo(obj, req) {
    axios.get(req)
    .then(function (response) {
      obj.setState({
        src: response.data.Poster,
        title: response.data.Title,
        director: 'Directed By ' + response.data.Director,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
      });
      console.log(response.data);
    })
  }

  render() {
    let req = 'https://www.omdbapi.com/?apikey=d3881b2d&i='+this.props.movie;
    return(
      <div className='mov-child'>
        {this.getMovieInfo(this, req)}
        <img src={this.state.src} onMouseEnter={this.dimPoster} onMouseLeave={this.resetPoster} onClick={this.props.modal.bind(this, this.state.src, this.state.title, this.state.director, this.state.imdb, this.state.plot)} alt={this.state.title}/>
      </div>      
    );
  }
}
export default Movie;