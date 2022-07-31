import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './common/Navigation/Navigation';
import {
  StyledPageLayout,
  StyledPageLeftSide,
  StyledPageRightSide,
} from './SharedLayout.styled';

const SharedLayout: React.FC = () => {
  return (
    <StyledPageLayout>
      <StyledPageLeftSide>
        <Navigation />
      </StyledPageLeftSide>

      <StyledPageRightSide>
        <Suspense>
          <Outlet />
        </Suspense>
      </StyledPageRightSide>
    </StyledPageLayout>
  );
};

export default SharedLayout;
