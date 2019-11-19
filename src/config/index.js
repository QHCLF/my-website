module.exports = {
    siteTitle: '前端开发工程师',
    siteDescription:
    '不开心吗？我唱歌给你听呀～',
    siteUrl: 'https://github.com',
    name: '覃欢',
    location: '深圳',
    email: 'qhmilk@gmail.com' ,
    github: 'https:github.com/qhclf',
    socialMedia: [
        {
            name: 'Github',
            url: 'https://github.com/qhclf',
        },
    ],
    navLinks: [
        {
            name: 'About',
            url:'#about',
        },
        {
            name: 'Experience',
            url: '#jobs',
        },
        {
            name: 'Work',
            url: '/#projects',
        },
        {
            name: 'Contact',
            url: '/#concat',
        }
    ],
    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0},
        opacity: 0,
        scale: 1 ,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'aways',
        viewFactor: 0.25,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
    }),
};