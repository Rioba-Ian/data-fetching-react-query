import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const fetchSeries = (pageNumber) => {
  return axios.get(`http://localhost:4000/series?_limit=2&_page=${pageNumber}`);
};

export default function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, isFetching, error } = useQuery(
    ["series", pageNumber],
    () => fetchSeries(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  data;

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        <h2>Series</h2>
        {data?.data.map((serie) => (
          <ul key={serie.id}>
            {serie.id}. {serie.name}
          </ul>
        ))}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 5}
        >
          Next Page
        </button>
      </div>

      {isFetching && "Loading"}
    </>
  );
}
