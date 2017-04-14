//Important: overwrite important config values in a local-development.js file, not here!

module.exports = {
    logger: {
        logLevel: {
            default: 'info'
        }
    },
    
    connections: {
        db: {
            name:     process.env.DB_NAME,
            user:     process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: {
                domain: process.env.DB_HOST,
                port:   process.env.DB_PORT
            },
            dialect: 'mysql',
            charset: 'utf8',
            
            pool: {
                max: 1000,
                min: 5,
                idle: 5 * 60 * 1000 //Five minutes
            }
        }
    },
    
}
