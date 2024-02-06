import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute component={<Register />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
