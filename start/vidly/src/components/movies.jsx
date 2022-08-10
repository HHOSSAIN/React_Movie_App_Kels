import React, { Component } from "react";
import { toast } from 'react-toastify';
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
//import { getMovies } from "../services/fakeMovieService";
import { getMovies, deleteMovie } from "../services/movieService";

//import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";

import { paginate } from "../utils/paginate";
import _ from "lodash";
import { Link } from "react-router-dom";
//import { toast } from 'react-toastify';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
  //componentDidMount() {
    //const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]; //can't directly call gtGenres() like this now as we need to await now
    const {data} = await getGenres(); //we did destructuring the same way we did in the "fake backend p136" notebook page as promise
                                    //has an attribute "data" which stores the json data, prolly as a list of js objects
    const genres = [{ _id: "", name: "All Genres" }, ...data]; 

    //this.setState({ movies: getMovies(), genres });
    const {data: movies} = await getMovies();
    this.setState({movies, genres});
  }

  /*handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  }; */

  //new delete using api delete request
  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    //optimistic updating of ui assuming there is a movie to delete
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({movies})

    try {
      await deleteMovie(movie._id);
    } 
    catch (error) {
      if(error.response && error.response.status === 404){
        toast.error("this movie has already been deleted");
      }
      this.setState({movies: originalMovies});
    }

  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize); //this is the func from paginate.js in "utils" folder. what gets done
                                                    //here is we take the list of items, consider the page number we want to render &
                                          //the number of items we want to render on that page. based on that, we start creating a new list 4m
                                    //the index from which items for that page start and render. these functions are provided by lodash

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount} //comes from using "getPagedData()" which we call inside render()
            pageSize={pageSize} //from state
            currentPage={currentPage} //from state
            onPageChange={this.handlePageChange} //method defined in this file
          />
        </div>
      </div>
    );
  }
}

export default Movies;
