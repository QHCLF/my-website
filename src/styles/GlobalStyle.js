import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';

const {colors, fontSizes, fonts }  = theme;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Calibre';
    font-weight: 300;
    font-style: normal;
    font-display: auto;
}
`;

export default GlobalStyle;