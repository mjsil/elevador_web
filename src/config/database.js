module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'elevadorweb',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
