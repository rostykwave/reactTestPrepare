import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  /* background-color: aqua; */
  /* height: 100vh; */
`;

export const StyledNav = styled.nav`
  display: flex;
  /* gap: 16px; */
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

  &.active {
    background-color: ${p => p.theme.colors.votingCardBg};
    /* color: ${p => p.theme.colors.votingCardBg}; */
  }
  /* .x .y {
    //child class selector
  } */

  :hover:not(.active),
  :focus-visible:not(.active) {
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

  color: #ff868e;
`;
