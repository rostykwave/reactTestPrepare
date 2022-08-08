import { StyledNav, NavItem, NavText, NavImage } from './Navigation.styled';
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
    <StyledNav>
      {navItems.map(({ href, text, icon }) => (
        <NavItem to={href} key={href} className={text}>
          <NavImage className={text}>
            <img src={icon} alt={text} />
          </NavImage>
          <NavText>{text}</NavText>
        </NavItem>
      ))}
    </StyledNav>
  );
};

export default Navigation;
