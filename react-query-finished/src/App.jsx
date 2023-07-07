import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import RQMoviesPage from "./components/RQMoviesPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQMoviePage from "./components/RQMoviePage";
import PaginatedQueries from "./components/PaginatedQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/rq-movies" element={<RQMoviesPage />} />
          <Route path="/rq-movie/:movieId" element={<RQMoviePage />} />
          <Route path="/rq-paginated" element={<PaginatedQueries />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
