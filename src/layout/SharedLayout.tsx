import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Box } from '../styleConfig/Box';
import MobileNavigation from './common/MobileNavigation/MobileNavigation';
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
  const isMobile = useMedia('(max-width:767px');

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
          {isMobile ? <MobileNavigation /> : <Navigation />}
          {/* <Navigation /> */}
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
