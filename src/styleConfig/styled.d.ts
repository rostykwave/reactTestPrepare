// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      heroBg: string;
      votingCardBg: string;
      breedsCardBg: string;
      galleryCardBg: string;
    };

    space: number[];
  }
}
