import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieData = (movieId) => {
  return axios.get(`http://localhost:4000/movies/${movieId}`);
};

const useMovieData = (movieId) => {
  return useQuery(["movie", movieId], () => fetchMovieData(movieId));
};

export default useMovieData;
