import useMovieData from "../hooks/useMovieData";
import { useParams } from "react-router-dom";

export default function RQMoviePage() {
  const movieId = useParams().movieId;
  const { data, isError, error, isFetching, isLoading } = useMovieData(movieId);

  if (isLoading && isFetching) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <p>Error in fetching data {error}</p>;
  }

  return (
    <div>
      <h2>Movie name: {data?.data.name}</h2>
      <p>Producer: {data?.data.producer}</p>
    </div>
  );
}
