import { lazy } from 'react';

export const HOME_ROUTE = '/';
export const CONTACTS_ROUTE = '/contacts';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const appRouts = [
  { path: HOME_ROUTE, element: <HomePage /> },
  { path: REGISTER_ROUTE, element: <RegisterPage /> },
  { path: LOGIN_ROUTE, element: <LoginPage /> },
  { path: CONTACTS_ROUTE, element: <ContactsPage /> },
];