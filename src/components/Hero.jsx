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

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  if (!movie)
    return (
      <>
        <p>fetching movie....</p>
      </>
    );

  const { title, release_date, overview, backdrop_path } = movie;

  return (
    <div className="w-full h-[500px] lg:h-screen">
      <div className="w-full h-full">
        <div className="absolute w-full h-[500px] lg:h-screen bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
        />
        <div className=" absolute w-full top-[70%] md:top-[60%] p-4 md:p-8">
          <h1 className=" text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 text-black py-2 px-4">
              Play
            </button>
            <button className="capitalize border border-gray-300 py-2 px-4 ml-4">
              Watch later
            </button>
            <p className="text-gray-300 text-sm mb-2 mt-2">{release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%]">
              {truncate(overview, 220)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
