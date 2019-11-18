/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loader,actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [{
                        test: /scrollreveal/,
                        use: loader.null(),
                    },
                    {
                        test: /animejs/,
                        use: loaders.null(),
                    }
                ]
            }
        })
    }

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@content': path.resolve(__dirname, 'src/content'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            }
        }
    })
}