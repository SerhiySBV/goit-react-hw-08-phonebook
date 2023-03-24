import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Suspense } from 'react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '20px',
        }}
      >
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts">Contacts</NavLink>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </nav>
  );
};
