// import { NavLink } from 'react-router-dom';
// import { NavCard } from '../NavCard/NavCard';
// import { StyledMobileNavigation, StyledNav } from './MobileNavigation.styled';

import { Box } from '../../../styleConfig/Box';
import { StyledMobileNavLink } from './MobileNavigation.styled';

const MobileNavigation: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" style={{ gap: '20px' }}>
      <StyledMobileNavLink to="voting">voting</StyledMobileNavLink>
      <StyledMobileNavLink to="breeds">breeds</StyledMobileNavLink>
      <StyledMobileNavLink to="gallery">gallery</StyledMobileNavLink>
    </Box>
    // <StyledNavigation>
    //   <StyledNav>
    //     <NavLink to="voting">
    //       <NavCard content="voiting" />
    //     </NavLink>
    //     <NavLink to="breeds">
    //       <NavCard content="breeds" />
    //     </NavLink>
    //     <NavLink to="gallery">
    //       <NavCard content="gallery" />
    //     </NavLink>
    //     {/* <NavLink to="breeds">Breeds</NavLink> */}
    //   </StyledNav>
    // </StyledNavigation>
  );
};

export default MobileNavigation;
