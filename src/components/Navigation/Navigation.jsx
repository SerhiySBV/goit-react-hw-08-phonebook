import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Suspense } from 'react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </nav>
  );
};
