import {
  CardLabel,
  CardLabelText,
  ColorlBg,
  StyledNavCard,
} from './NavCard.styled';

export const NavCard: React.FC = () => {
  return (
    <StyledNavCard>
      <ColorlBg />
      <CardLabel>
        <CardLabelText>Voiting</CardLabelText>
      </CardLabel>
    </StyledNavCard>
  );
};
