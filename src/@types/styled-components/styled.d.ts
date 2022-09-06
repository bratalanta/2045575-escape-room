import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      whisper: string;
      whisper2: string;
      carrotOrange: string;
      tangerine: string;
      white: string;
      nero: string;
      nero2: string;
      black: string;
      whiteSmoke: string;
      darkerGray: string;
      gray: string;
      eclipse: string;
      pinkSwan: string;
    };

    font: {
      mini: string;
      semilarge: string;
      semibase: string;
      small: string;
      medium: string;
      large: string;
      base: string;
      upperbase: string;
      formsHeading: string;
    }
  }
}
