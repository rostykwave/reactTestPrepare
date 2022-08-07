import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const NavItem = styled(NavLink)`
  width: 138px;
  height: 244px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;

  & .imageWrap {
    height: 198px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 4px solid rgba(255, 255, 255, 0.6);
  }

  &.voting .imageWrap {
    background-color: ${p => p.theme.colors.votingCardBg};
  }
  &.breeds .imageWrap {
    background-color: ${p => p.theme.colors.breedsCardBg};
  }
  &.gallery .imageWrap {
    background-color: ${p => p.theme.colors.galleryCardBg};
  }

  &.active .textWrap {
    background-color: ${p => p.theme.colors.activeBg};
    color: ${p => p.theme.colors.whiteTxt};
  }
  /* .x .y {
    //child class selector
  } */

  :hover:not(.active) .textWrap,
  :focus-visible:not(.active) .textWrap {
    background-color: ${p => p.theme.colors.hoverBg};
    /* color: ${p => p.theme.colors.votingCardBg}; */
  }
`;

export const NavText = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 0;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.pinkTxt};
`;
