import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './components/firebase/firebase';

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading || error) {
    return null; // or a loading spinner
  }

  return user ? children : null;
};


export default ProtectedRoute;
