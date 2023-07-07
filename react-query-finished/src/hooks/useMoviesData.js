import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMoviesData = () => {
  return axios.get("http://localhost:4000/movies");
};

const useMoviesData = () => {
  return useQuery(["movies"], fetchMoviesData, {
    enabled: false,
  });
};

export default useMoviesData;
