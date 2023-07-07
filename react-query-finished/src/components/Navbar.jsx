import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="nav--logo">
          <Link to="/">Movies Page</Link>
        </div>

        <ul>
          <li>
            <Link to="/movies">useEffect movies</Link>
          </li>
          <li>
            <Link to="/rq-movies">RQ movies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
