import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children, roles, allowPublic = false }) => {
  const { user } = useContext(AuthContext);

  if (!user && !allowPublic) {
    return <Navigate to="/login" />;
  }

  if (roles && user && !roles.includes(user.rol)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
