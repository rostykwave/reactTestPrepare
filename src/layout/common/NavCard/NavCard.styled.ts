import styled from 'styled-components';

export const StyledNavCard = styled.div`
  /* background-color: #b4b7ff; */
  width: 138px;
  height: 244px;
`;

interface ColorlBgProps {
  readonly content: string;
}
export const ColorlBg = styled.div<ColorlBgProps>`
  background-color: ${p => {
    switch (p.content) {
      case 'voiting':
        return p.theme.colors.votingCardBg;
      case 'breeds':
        return p.theme.colors.breedsCardBg;
      case 'gallery':
        return p.theme.colors.galleryCardBg;

      default:
        return p.theme.colors.heroBg;
    }
  }};

  /* width: 100%; */
  height: 198px;
  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, 0.6);
`;
export const CardLabel = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 10px;
`;
export const CardLabelText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ff868e;
`;
