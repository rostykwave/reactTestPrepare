import {
  CardLabel,
  CardLabelText,
  ColorlBg,
  StyledNavCard,
} from './NavCard.styled';
import { NavCardImage } from './NavCardImage/NavCardImage';

interface IProps {
  content: string;
}

export const NavCard: React.FC<IProps> = ({ content }) => {
  return (
    <StyledNavCard>
      <ColorlBg content={content}>
        <NavCardImage content={content} />
      </ColorlBg>
      <CardLabel>
        <CardLabelText>{content}</CardLabelText>
      </CardLabel>
    </StyledNavCard>
  );
};
