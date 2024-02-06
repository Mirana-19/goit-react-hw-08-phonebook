import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slice';
import { NavLink } from 'react-router-dom';
import { StyledDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledDiv>
      <p>{user.email}</p>
      <NavLink to={'contacts'}>Contacts</NavLink>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </StyledDiv>
  );
};
