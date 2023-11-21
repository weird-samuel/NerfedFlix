import { useState } from "react";
import { createImageUrl } from "../services/movieservices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
const MovieItem = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const { title, backdrop_path, poster_path } = movie;

  const markFaveShow = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLiked(!liked);
      await updateDoc(userDoc, {
        faveShows: arrayUnion(...movie),
      });
    } else {
      alert("You must be logged in to mark a show as a favorite");
    }
  };
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
        <p onClick={markFaveShow}>
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

export default MovieItem;
