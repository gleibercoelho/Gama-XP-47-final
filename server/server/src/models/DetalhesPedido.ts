import db from "../infra/database";
import { DataTypes } from "sequelize";
import Produtos from "./Produtos";
import Pedidos from "./Pedidos";

const DetalhesPedido = db.define(
  "DetalhesPedido",
  {
    pedido_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pedidos,
        key: "id"
    }    
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produtos,
        key: "id"
    }     
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "detalhespedido",
    timestamps: true
  }
);

export default DetalhesPedido;