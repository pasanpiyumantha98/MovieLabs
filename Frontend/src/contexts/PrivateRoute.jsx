// PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authcontext';

export default function PrivateRoute() {
  const { user, bootstrapped } = useAuth();

  if (!bootstrapped) return null;          // or a loader

  return user ? <Outlet /> : <Navigate to="/" replace />;
}
