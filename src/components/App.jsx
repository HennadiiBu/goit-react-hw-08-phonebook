import { NavLink, Route, Routes } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRouts,
} from './config/routes';
import NotfoundPage from './pages/NotfoundPage';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
          <NavLink to={REGISTER_ROUTE}>Register</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <>
              {appRouts.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </>
            <>
              <Route path="*" element={<NotfoundPage />} />
            </>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
