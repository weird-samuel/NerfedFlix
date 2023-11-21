import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
