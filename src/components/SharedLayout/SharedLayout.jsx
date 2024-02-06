import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, MainStyled } from './SharedLayout.styled';
import { Navigation } from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
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
