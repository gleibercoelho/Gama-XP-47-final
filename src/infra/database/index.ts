const Sequelize = require("sequelize")

const DB_NAME = "ecommerce";
const DB_USER = "root";
const DB_PASS = "cdIldXYiTd1@";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

// objeto para guardar a conexão do banco dados

let db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);


async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}

Object.assign(db, {
  hasConection,
});

export default db;