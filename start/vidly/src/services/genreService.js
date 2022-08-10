import http from "./httpService"; //allows us to use the axios get/post/put/del reqs as those were exported from that file

export function getGenres() {
  //making api endpoint call
  return http.get("http://localhost:3900/api/genres"); //it's better to not hardcode and instead store these endpoints to be used
  //in a config file
}
