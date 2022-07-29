import React from 'react';
//import MovieForm from './../../../../finish/vidly/src/components/movieForm';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';

//const movieForm = ({match, history}) => {
//const movieForm = (props) => {
class MovieForm extends Form{
  //const {match, history} = this.props; //don't know why "match" was not getting extracted like this...LEARN

  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(), //"required" not added coz there could be 0 movies
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };


  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id; //the id comes from the movie clicked
                                        //in movies.jsx..tableBody.jsx
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    //if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }


  //return (
  render(){
    return(
    <div>
        <h1>movieForm {this.props.match.params.id}</h1>
        <button className='btn btn-primary' onClick={() => this.props.history.push("/movies")}>
          Save
        </button>
    </div>
    )
  }
}

export default MovieForm;