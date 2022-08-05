import VoitngImg from '../../../../images/HomePage/cards/vote-table.png';
import BreedsImg from '../../../../images/HomePage/cards/pet-breeds.png';
import GalleryImg from '../../../../images/HomePage/cards/images-search.png';
import { StyledNavCardImage } from './NavCardImage.styled';

interface IProps {
  content: string;
}

export const NavCardImage: React.FC<IProps> = ({ content }) => {
  return (
    <StyledNavCardImage>
      {(() => {
        switch (content) {
          case 'voiting':
            return <img src={VoitngImg} alt={content} />;
          case 'breeds':
            return <img src={BreedsImg} alt={content} />;
          case 'gallery':
            return <img src={GalleryImg} alt={content} />;

          default:
            return <div>No images</div>;
        }
      })()}
    </StyledNavCardImage>
  );
};
