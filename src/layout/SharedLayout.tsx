import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../styleConfig/Box';
import { NavBar } from './common/NavBar/NavBar';
import Navigation from './common/Navigation/Navigation';
import {
  Container,
  Paragraph,
  StyledLeftSideContent,
  StyledPageLeftSide,
  StyledPageRightSide,
  Subtitle,
  Title,
} from './SharedLayout.styled';

const SharedLayout: React.FC = () => {
  return (
    <Container>
      <StyledPageLeftSide>
        <NavBar />
        <StyledLeftSideContent>
          <Title>Hi, intern!</Title>
          <Subtitle>Welcome to MI 2022 Front-end test</Subtitle>
          <Paragraph>Lets start using The Cat API</Paragraph>
        </StyledLeftSideContent>

        <Box mt="20px">
          <Navigation />
        </Box>
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
