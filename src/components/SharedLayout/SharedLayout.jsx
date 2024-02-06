import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderStyled, MainStyled, NavStyled } from './SharedLayout.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';

const SharedLayout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'register'}>Register</NavLink>
          <NavLink to={'login'}>Login</NavLink>
          <NavLink to={'contacts'}>Contacts</NavLink>
          <button type="button" onClick={() => dispatch(logoutUser())}>
            Logout
          </button>
        </NavStyled>
      </HeaderStyled>
      <MainStyled>
        <Suspense fallback={<p>Loading content</p>}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </>
  );
};

export default SharedLayout;
