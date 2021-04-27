require('dotenv').config();

module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: porcess.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [
        'dist/**/*.entity{.ts,.js}',
    ],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts']
}