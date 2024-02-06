import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const HeaderStyled = styled.header`
  padding: 30px;
  background-color: #222121;
  color: #f3f3f3;
  font-size: 28px;
`;

export const MainStyled = styled.main`
  max-width: 1200px;
  padding: 70px;
  margin: 0 auto;
`;

export const LinkStyled = styled(Link)`
  border-radius: 4px;
  background-color: #e50914;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9b060e;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
