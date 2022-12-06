const rootPath = __dirname;
let dbHost = process.env.DB_HOST || 'localhost'
module.exports = {
    rootPath,
    mongo: {
        db: `mongodb://${dbHost}/Currency`,
        options: {useNewUrlParser: true},
    }
};
