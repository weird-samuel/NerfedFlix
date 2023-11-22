import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const rowId = Math.floor(Math.random() * 1000);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.scrollLeft += offset;
  };
  return (
    <>
      <h2 className="font-nsans-bold md:text-xl px-4 capitalize">{title}</h2>

      <div className="relative flex item-center group">
        <MdChevronLeft
          onClick={() => slide(-250)}
          className="bg-white rounded-full absolute left-2 top-16 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
        <MdChevronRight
          onClick={() => slide(250)}
          className="bg-white rounded-full absolute right-2 top-16 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
};

export default MovieRow;
