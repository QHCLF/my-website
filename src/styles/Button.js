import styled from 'styled-components';
import them from './theme';

const { colors, fontSize, fonts }   = them;
const Button = styled.button`
color: ${colors.green};
background-color: transparent;
border: 1px solid ${colors.green};
border-radius: ${them.borderRadius};
font-size: ${fontSize.smallish};
font-family: ${fonts.SFMono};
line-height: 1;
text-decoration: none;
cursor: pointer;
transition: ${theme.transition};
padding: 1.25rem 1.75rem;

&:hover,
&:focus,
&:active{
    background-color； ${colors.transGreen};
    outline:none;
}
&:after{
    display: none !important;
}
`;

export default Button;