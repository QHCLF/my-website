import { css } from 'styled-components';
import theme from './theme';
import media from './media';
const {colors, fontSizes, fonts } = theme;

const mixins = {
    flexCenter: css`
    display: flex;
    justify-content: center;
    align-items : center;
    `,
    
    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    outline: css`
    outline: 1px solid red;
    `,
    link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus{
        color: ${colors.green};
        outline: 0;
    }
    `,

    inlineLink: css`
    dispaly: inline-block;
    text-decoration: none;
    text-decoration-skip-inl: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${color.green};
    &:hover,
    &:focus,
    &:active{
        color: ${colors.green};
        outline: 0;
        &:after{
            width: 100%;
        }
    }
    &:after{
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: ${colors.green};
        transition: ${theme.transition};
        opacity: 0.5;
    }
    `,
}

export default mixins;