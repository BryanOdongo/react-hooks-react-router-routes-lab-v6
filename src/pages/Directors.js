import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors");
        if (!response.ok) {
          throw new Error("Failed to fetch directors");
        }
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Directors Page</h1>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
