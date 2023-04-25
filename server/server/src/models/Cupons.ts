import db from "../infra/database";
import { DataTypes } from "sequelize";

const Cupons = db.define(
  "Cupons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    desconto: {
        type: DataTypes.FLOAT,
      },
    descontoporcentagem: {
        type: DataTypes.BOOLEAN,
      },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "cupons",
    timestamps: true
  }
);

export default Cupons;
