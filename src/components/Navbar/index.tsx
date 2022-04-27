import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info p-2 bg-opacity-25">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">News</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/category/technology"
              className="nav-link active text-danger"
              aria-current="page"
            >
              Tecnologia
            </Link>
            <Link to="/category/business" className="nav-link active text-danger">
              Business
            </Link>
            <Link to="/category/sports" className="nav-link active text-danger">
              Sport
            </Link>
            <Link to="/category/science" className="nav-link active text-danger">
              Scienza
            </Link>
            <Link to="/category/entertainment" className="nav-link active text-danger">
              Intrattenimento
            </Link>
            <Link to="/category/health" className="nav-link active text-danger">
              Salute
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
