const dbConfig = {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};

export default dbConfig;