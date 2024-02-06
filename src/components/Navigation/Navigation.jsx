import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavStyled } from 'components/SharedLayout/SharedLayout.styled';
import { LinksContainer } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <NavStyled>
      <NavLink to={'/'}>Home</NavLink>
      <LinksContainer>
        {!isLoggedin && <NavLink to={'register'}>Register</NavLink>}
        {!isLoggedin && <NavLink to={'login'}>Login</NavLink>}
      </LinksContainer>

      {isLoggedin && <UserMenu />}
    </NavStyled>
  );
};
