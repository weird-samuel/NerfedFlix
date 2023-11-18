import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);
  return (
    <>
      <h2 className="font-nsans-bold md:text-xl px-4 capitalize">{title}</h2>

      <div className="relative flex item-center">
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieRow;
