// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      pinkTxt: string;
      whiteTxt: string;
      hoverBg: string;
      activeBg: string;
      heroBg: string;
      votingCardBg: string;
      breedsCardBg: string;
      galleryCardBg: string;
    };

    space: number[];
  }
}
