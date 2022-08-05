import { NavLink } from 'react-router-dom';
import { NavCard } from '../NavCard/NavCard';
import { StyledNavigation, StyledNav } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <StyledNav>
        <NavLink to="voting">
          <NavCard content="voiting" />
        </NavLink>
        <NavLink to="breeds">
          <NavCard content="breeds" />
        </NavLink>
        <NavLink to="gallery">
          <NavCard content="gallery" />
        </NavLink>
        {/* <NavLink to="breeds">Breeds</NavLink> */}
      </StyledNav>
    </StyledNavigation>
  );
};

export default Navigation;
