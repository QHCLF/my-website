import  ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const scroll = isSSR ? null : ScrollReveal();

export default scroll;