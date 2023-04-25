import dbConfig from "../configs/dbConfig";
const Sequelize = require("sequelize")
require('dotenv').config()

// objeto para guardar a conexão do banco dados

let db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, dbConfig);


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