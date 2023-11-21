import { useState } from "react";
import { createImageUrl } from "../services/movieservices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PropTypes } from "prop-types";
const MovieItem = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const { title, backdrop_path, poster_path } = movie;

  //cost markFaveShow = async () => {
    //const userEmail = user?.email;
  //}
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-40 object-cover object-top "
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 transition duration-500 ease-in-out transform">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold text-center">
          {movie.title}
        </p>
        <p>
          {liked ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-200"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-200"
            />
          )}
        </p>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    // Add other properties as needed
  }).isRequired,
};

export default MovieItem;
