import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        console.log(error.message);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <p>Error in fetching data</p>;
  }
  return (
    <>
      <h2>Movies Page with useEffect</h2>
      {data?.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </>
  );
}
