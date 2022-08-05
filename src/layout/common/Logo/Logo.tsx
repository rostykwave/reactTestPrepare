import { NavLink } from 'react-router-dom';
import LogoImg from '../../../images/logo/Logo.svg';

export const Logo: React.FC = () => {
  return (
    <NavLink to="/">
      <img src={LogoImg} alt="Logo" />
    </NavLink>
  );
};
