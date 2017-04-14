

let serverPort = process.env.PORT || 8081;

module.exports = {
    server: {
        name: process.env.SERVER_NAME || "miter-seed",
        port: serverPort,
        hostname: process.env.HOSTNAME || `http://localhost:${serverPort}/`
    }
}
