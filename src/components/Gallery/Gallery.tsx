import { IBread } from '../../types/bread';
import { GalleryGrid } from './Gallery.styled';

interface IProps {
  items: IBread[];
}

export const Gallery: React.FC<IProps> = ({ items }) => {
  return (
    <GalleryGrid>
      {items.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </GalleryGrid>
  );
};
