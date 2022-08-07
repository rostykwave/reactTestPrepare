import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'one two three '
    'one four four '
    'five four four ';
  /* grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4; */
  /* grid-template-columns: 200px 1fr; */
`;
