import { Route, Routes } from 'react-router-dom';
import { appRouts } from './config/routes';
import NotfoundPage from '../pages/NotfoundPage';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/operations';
import Loader from './Loader/Loader';
import Header from './Header/Header';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
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
