import http from "./httpService"; //allows us to use the axios get/post/put/del reqs as those were exported from that file

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  //making api endpoint call
  return http.get(apiEndpoint); //it's better to not hardcode and instead store these endpoints to be used
  //in a config file
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
