import { css } from 'styled-components';

const sizes = {
    giant : 1440,
    bigDesktop: 1200,
    desktop: 1000,
    tablet: 768,
    thone: 600,
    phone: 376,
    tiny: 330,
};

export const media  = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = size[lable] / 16;
    accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em){
        ${css(...args)};
    }
    `;
    return accumulator;
}, {});

export default media;