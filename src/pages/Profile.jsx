import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieservices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.scrollLeft += offset;
  };

  const handleUnlikeShow = async (movie) => {
    const userDoc = doc(db, "users", `${user?.email}`);

    await updateDoc(userDoc, { favShows: arrayRemove(movie) });
  };

  if (!user) {
    return (
      <>
        <p>fetching...</p>
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <img
            className="block w-full h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/ec673412-470b-4ad5-b473-e4233cbf01a4/NG-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="///"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />

          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
              Favourite Shows
            </h1>
            <p className="font-nsans-light text-gray-400 text-lg">
              {user.email}
            </p>
          </div>
        </div>
        <h2 className="font-nsans-bold md:text-xl px-4 capitalize">
          Your shows
        </h2>

        <div className="relative flex item-center group">
          <MdChevronLeft
            onClick={() => slide(-250)}
            className="bg-white rounded-full absolute left-2 top-16 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
          <div
            id={`slider`}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => {
              <div
                key={movie.id}
                className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
              >
                <img
                  className="w-full h-40 object-cover object-top "
                  src={createImageUrl(
                    movie.backdrop_path ?? movie.poster_path,
                    "w500"
                  )}
                  alt={movie.title}
                />

                <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 transition duration-500 ease-in-out transform">
                  <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold text-center">
                    {title}
                  </p>
                  <p>
                    <AiOutlineClose
                      onClick={() => handleUnlikeShow(movie)}
                      size={30}
                      className="absolute top-2 right-2"
                    />
                  </p>
                </div>
              </div>;
            })}
          </div>
          <MdChevronRight
            onClick={() => slide(250)}
            className="bg-white rounded-full absolute right-2 top-16 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
