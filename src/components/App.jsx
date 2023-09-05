import { Route, Routes } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRouts,
} from './config/routes';
import NotfoundPage from './pages/NotfoundPage';
import { Suspense } from 'react';
import { NavigationBar, StyledLink } from './styledComponents/components';

export const App = () => {
  return (
    <>
      <header>
        <NavigationBar>
          <StyledLink to={HOME_ROUTE}>Home</StyledLink>
          <StyledLink to={REGISTER_ROUTE}>Register</StyledLink>
          <StyledLink to={LOGIN_ROUTE}>Login</StyledLink>
          <StyledLink to={CONTACTS_ROUTE}>Contacts</StyledLink>
        </NavigationBar>
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
