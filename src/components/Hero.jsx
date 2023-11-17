import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../services/movieservices";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);

  if (!movie)
    return (
      <>
        <p>fetching movie....</p>
      </>
    );

  const { title, overview, backdrop_path } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Hero;
