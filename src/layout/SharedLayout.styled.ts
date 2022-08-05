import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  height: 100px;
  padding: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  /* background-color: red; */
`;

export const StyledPageLeftSide = styled.div`
  position: sticky;
  /* left: 165px; */
  /* top: 30px; */
  width: 446px;
  margin-left: 165px;
  /* height: 100vh; */
`;
export const StyledLeftSideContent = styled.div`
  margin-top: 134px;
`;
export const StyledPageRightSide = styled.div`
  /* background-color: tomato; */
  /* margin-left: 730px; */
  /* height: 100vh; */
  position: absolute;
  right: 30px;
  top: 30px;
  width: 680px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 44px;
  line-height: 1.32;
  /* identical to box height, or 132% */
  margin: 0;

  color: #1d1d1d;
`;
export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */
  margin: 0;
  margin-top: 10px;

  color: #8c8c8c;
`;
export const Paragraph = styled.p`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */
  margin: 0;
  margin-top: 60px;

  color: #1d1d1d;
`;
export const NavigationWrap = styled.p`
  margin-top: 20px;
`;
