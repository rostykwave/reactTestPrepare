import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMobileNavLink = styled(NavLink)`
  display: block;
  width: 335px;
  /* height: 36px; */
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  /* identical to box height, or 133% */

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  color: #ff868e;

  /* margin-top: 20px; */
`;

// export const StyledNav = styled.nav`
//   display: flex;
//   gap: 16px;
// `;
