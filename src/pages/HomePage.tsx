import styled from 'styled-components';
import HomePageHeroIMG from '../images/HomePage/girl-and-pet 1.png';
const StyledHero = styled.div`
  position: relative;
`;
const StyledHeroBg = styled.div`
  background-color: pink;
  position: absolute;
  left: 65px;
  top: 30px;
  width: 680px;
  height: 840px;
  z-index: -1;
  border-radius: 20px;
`;
const StyledImage = styled.img`
  transform: scale(1.14);
`;

const HomePage: React.FC = () => {
  return (
    <StyledHero>
      <StyledImage src={HomePageHeroIMG} alt="girl_and_pet" />
      {/* <img src={HomePageHeroIMG} alt="girl_and_pet" /> */}
      <StyledHeroBg />
    </StyledHero>
  );
};

export default HomePage;
