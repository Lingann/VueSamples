module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuesample/'
        : '/',
    devServer: {
        proxy: {
            '/proxyApi': {
                target: '...',
                changeOrigin: true,
                pathRewrite: {
                    '/proxyApi': ''
                }
            }
        }
    }
};
