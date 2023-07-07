import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import RQMoviesPage from "./components/RQMoviesPage";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/rq-movies" element={<RQMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
