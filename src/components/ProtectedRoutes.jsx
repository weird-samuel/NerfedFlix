import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
