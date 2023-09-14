import { Route, Routes } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRouts,
} from './config/routes';
import NotfoundPage from './pages/NotfoundPage';
import { Suspense, useEffect } from 'react';
import { NavigationBar, StyledLink } from './styledComponents/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthention, selectUserData } from './redux/selectors';
import { logoutUser, refreshUser } from './redux/operations';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthention);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <header>
        <NavigationBar>
          <StyledLink to={HOME_ROUTE}>Home</StyledLink>

          {authenticated ? (
            <>
              <StyledLink to={CONTACTS_ROUTE}>Contacts</StyledLink>
              <span>{userData.email}</span>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <>
              {' '}
              <StyledLink to={LOGIN_ROUTE}>Login</StyledLink>
              <StyledLink to={REGISTER_ROUTE}>Register</StyledLink>
            </>
          )}
        </NavigationBar>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
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
