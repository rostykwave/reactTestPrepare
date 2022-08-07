import {
  StyledNavigation,
  StyledNav,
  NavItem,
  NavText,
} from './Navigation.styled';
import VoitngImg from '../../../images/HomePage/cards/vote-table.png';
import BreedsImg from '../../../images/HomePage/cards/pet-breeds.png';
import GalleryImg from '../../../images/HomePage/cards/images-search.png';

const navItems = [
  { href: 'voting', text: 'voting', icon: VoitngImg },
  { href: 'breeds', text: 'breeds', icon: BreedsImg },
  { href: 'gallery', text: 'gallery', icon: GalleryImg },
];

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <StyledNav>
        {navItems.map(({ href, text, icon }) => (
          <NavItem to={href} key={href} className={text}>
            <div className="imageWrap">
              <img src={icon} alt={text} />
            </div>
            <NavText> {text}</NavText>
          </NavItem>
        ))}
        {/* <NavLink to="voting">
          <NavCard content="voiting" />
        </NavLink>
        <NavLink to="breeds">
          <NavCard content="breeds" />
        </NavLink>
        <NavLink to="gallery">
          <NavCard content="gallery" />
        </NavLink> */}
        {/* <NavLink to="breeds">Breeds</NavLink> */}
      </StyledNav>
    </StyledNavigation>
  );
};

export default Navigation;
