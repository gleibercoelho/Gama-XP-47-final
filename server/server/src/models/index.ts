import Usuarios from "./Usuarios"
import Categorias from "./Categorias"
import Produtos from "./Produtos"
import Pedidos from "./Pedidos"
import DetalhesPedido from "./DetalhesPedido"
import Cupons from "./Cupons"

Categorias.hasMany(Produtos, { foreignKey: "categoria" })
Usuarios.hasMany(Pedidos, { foreignKey: "usuario_id" })
Cupons.hasMany(Pedidos, { foreignKey: "cupom"})

Produtos.belongsToMany(Pedidos, {
    foreignKey: "produto_id",
    through: DetalhesPedido,
  });
  
Pedidos.belongsToMany(Produtos, {
    foreignKey: "pedido_id",
    through: DetalhesPedido,
  });
  
  DetalhesPedido.belongsTo(Produtos, { foreignKey: "produto_id" });
  DetalhesPedido.belongsTo(Pedidos, { foreignKey: "pedido_id" });

export {
    Usuarios,
    Produtos,
    Categorias,
    Pedidos,
    DetalhesPedido,
    Cupons,
}