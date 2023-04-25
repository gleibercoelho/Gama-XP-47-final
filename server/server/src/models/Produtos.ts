import db from "../infra/database";
import { DataTypes } from "sequelize";
import Categorias from "./Categorias"

const Produtos = db.define(
  "Produtos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    foto: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.FLOAT,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    categoria: [{
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            key: "id"
        }
    }],
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "produtos",
    timestamps: true
  }
);

export default Produtos;
