import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className="container">
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Runtime: {movie.time} minutes</p>
      <p>
        Genres:{" "}
        {movie.genres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </p>
    </div>
  );
};

export default Movie;
