import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <div>Navigation</div>
      <nav>
        <NavLink to="breeds">Breeds</NavLink>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
