import db from "../infra/database";
import { DataTypes } from "sequelize";


const Categorias = db.define(
  "Categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "categorias",
    timestamps: true
  }
);

export default Categorias;
