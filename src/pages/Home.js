import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <h1>Home Page</h1>
      {movies.length > 0 ? (
        <section>
          <h3>Movies</h3>
          {movies.map((movie) => (
            <article key={movie.id}>
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </article>
          ))}
        </section>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default Home;
