import { NavLink } from 'react-router-dom';
import { NavCard } from '../NavCard/NavCard';
import { StyledNavigation, StyledNav } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <div>Navigation</div>
      <StyledNav>
        <NavLink to="breeds">
          <NavCard />
        </NavLink>
        <NavLink to="breeds">
          <NavCard />
        </NavLink>
        <NavLink to="breeds">
          <NavCard />
        </NavLink>
        {/* <NavLink to="breeds">Breeds</NavLink> */}
      </StyledNav>
    </StyledNavigation>
  );
};

export default Navigation;
