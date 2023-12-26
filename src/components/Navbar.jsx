import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useSnackbar } from "notistack";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await logOut();
      enqueueSnackbar("Logged out successfully!", { variant: "success" });
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Error logging out:", error.message),
        {
          variant: "error",
        };
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-3xl lg:text-5xl sm:text-2xl">
          neredflix
        </h1>
      </Link>

      {user ? (
        <div className="">
          <Link to="/profile">
            <button className="Capitalize py-4">profile</button>
          </Link>
          <button
            onClick={handleLogout}
            className="Capitalize bg-red-600 px-6 py-2 ml-4 rounded cursor-pointer"
          >
            logout
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/login">
            <button className="Capitalize py-4">login</button>
          </Link>
          <Link to="/signup">
            <button className="Capitalize bg-red-600 px-6 py-2 ml-4 rounded cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
