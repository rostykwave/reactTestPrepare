import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  height: 100px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
`;

export const StyledPageLeftSide = styled.div`
  position: sticky;
  /* left: 165px; */
  /* top: 30px; */
  width: 446px;
  margin-left: 165px;
  /* height: 100vh; */
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
