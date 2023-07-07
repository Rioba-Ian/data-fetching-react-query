import useMoviesData from "../hooks/useMoviesData";
import { Link } from "react-router-dom";

export default function RQMoviesPage() {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useMoviesData();

  if (isLoading && isFetching) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <p>Error in fetching data {error}</p>;
  }

  return (
    <>
      <h2>RQ movies data</h2>
      <button onClick={refetch}> Fetch Movie List</button>
      {data?.data.map((movie) => (
        <div key={movie.id}>
          <Link to={`/rq-movie/${movie.id}`}>{movie.name}</Link>
        </div>
      ))}
    </>
  );
}
