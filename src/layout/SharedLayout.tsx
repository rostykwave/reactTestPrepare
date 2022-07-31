import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './common/Navigation/Navigation';
import {
  Container,
  StyledPageLeftSide,
  StyledPageRightSide,
} from './SharedLayout.styled';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <StyledPageLeftSide>
        <p>Hi, intern!</p>
        <p>Welcome to MI 2022 Front-end test</p>
        <p>Lets start using The Cat API</p>
        <Navigation />
      </StyledPageLeftSide>

      <StyledPageRightSide>
        <Suspense>
          <Outlet />
        </Suspense>
      </StyledPageRightSide>
    </Container>
  );
};

export default SharedLayout;
