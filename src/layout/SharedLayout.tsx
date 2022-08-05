import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from './common/Logo/Logo';
import Navigation from './common/Navigation/Navigation';
import {
  Container,
  NavigationWrap,
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
        <Logo />
        <StyledLeftSideContent>
          <Title>Hi, intern!</Title>
          <Subtitle>Welcome to MI 2022 Front-end test</Subtitle>
          <Paragraph>Lets start using The Cat API</Paragraph>
        </StyledLeftSideContent>

        <NavigationWrap>
          <Navigation />
        </NavigationWrap>
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
