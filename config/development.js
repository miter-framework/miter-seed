

module.exports = {
    server: {
        name: process.env.SERVER_NAME || "brandonslade.me",
        port: process.env.PORT || 8081,
        hostname: process.env.HOSTNAME || 'http://dev.brandonslade.me'
    }
}
