import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/actors");
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <h1>Actors Page</h1>
      {actors.length > 0 ? (
        <ul>
          {actors.map((actor) => (
            <li key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading actors...</p>
      )}
    </div>
  );
};

export default Actors;
