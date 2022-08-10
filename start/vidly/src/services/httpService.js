import axios from "axios"; //0.18.0
import logger from "./logService"; //4.1.0
import { toast } from "react-toastify";

//prolly a middleware
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 && //400 er  ghorer gula known errors in request
    error.response.status < 500; //500 nd above is bad request

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
