import { Usuarios, Pedidos, Produtos, DetalhesPedido, Cupons } from "../../models";
import { Request, Response } from "express";
import Auth from "../../middlewares/authToken"

const PedidoController = {

    async getAll(req: Request, res:Response){
        try {  
            const pedidos = await Pedidos.findAll({
                include: [
                {
                    model: Produtos,
                }
            ]
            })


           for(var i=0; i<pedidos.length;i++){
            for(var k=0; k<pedidos[i].Produtos.length;k++){
                pedidos[i].Produtos[k].foto = "http://localhost:3000/imagens/" + pedidos[i].Produtos[k].foto
            }
           }

            return res.status(201).json(pedidos)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json("Algo errado aconteceu, chame ajuda");
        }
    },

    async getOne(req: Request, res:Response){
        try {
            const { id } = req.params;
            const pedidos = await Pedidos.findOne({
                where: {id: id},
                include: [
                {
                    model: Produtos,
                },
            ],

            })
            for (var pos in pedidos.Produtos) {
                if (pedidos.Produtos.hasOwnProperty(pos)) {
                  pedidos.Produtos[pos].foto = "http://localhost:3000/imagens/" + pedidos.Produtos[pos].foto;
                }
              }
            return res.status(201).json(pedidos)
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame ajuda");
        }
    },
    async getAllByid(req: Request, res:Response){
        try {
            const { id } = req.params;
            const pedidos = await Pedidos.findAll({
                where: {usuario_id: id},
                include: [
                {
                    model: Produtos,
                },
            ],

            })
            for (var pos in pedidos.Produtos) {
                if (pedidos.Produtos.hasOwnProperty(pos)) {
                  pedidos.Produtos[pos].foto = "http://localhost:3000/imagens/" + pedidos.Produtos[pos].foto;
                }
              }
            return res.status(201).json(pedidos)
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame ajuda");
        }
    },

  async create(req: Request, res: Response) {
    try {
        const usuario = Auth.getToken(req,res);
        
        const { listaprodutos, nomeCupom } = req.body
        var produtoValido = true
        var soma = 0;
        var descontoCupom = 0;
        var valortotal = 0;
        

        for(var i =0; i<listaprodutos.length; i++){
            const listaMapped = await Produtos.findByPk(listaprodutos[i].idproduto)
            if(!listaMapped){
                produtoValido = false;
                res.status(400).json("Produto invalido")
                break;
            }
            soma = soma + listaMapped.preco*listaprodutos[i].quantidade
        }
 
        if(produtoValido == true){

            if(nomeCupom){
                const cupom = await Cupons.findOne({
                    where: {nome: nomeCupom},
                })
                if(cupom.descontoporcentagem == true){
                    valortotal = soma - soma*cupom.desconto/100
                }else{
                    if(cupom.desconto >= soma){
                        valortotal = 0;
                    }else{
                        valortotal = soma - cupom.desconto
                    }
                var nomecupom = nomeCupom
                }  
                
            }
            else{
                nomecupom = null
                valortotal = soma
            }
            const newPedido = await Pedidos.create({usuario_id: usuario.id ,valor:valortotal, cupom: nomecupom})
            for(var i=0; i<listaprodutos.length; i++){
                await DetalhesPedido.create({
                    pedido_id:newPedido.id,
                    produto_id:listaprodutos[i].idproduto,
                    quantidade:listaprodutos[i].quantidade
                })
            }

            const result2 = await Pedidos.findAll({
                where: {id: newPedido.id},
                include: [
                {
                    model: Produtos,
                }],
            })


            return res.status(201).json(result2)
        }
        

    } catch (error) {
        console.log(error)
        return res.status(500).json("Algo errado aconteceu, chame ajuda");
    }    
  },

    async update(req:Request,res:Response){
        try {
            const { id } = req.params;
            const payloadUpdate = {};

            Object.assign(payloadUpdate, req.body);

            await Pedidos.update(payloadUpdate, {
                where: { id },
              });

              const pedidos = await Pedidos.findOne({
                where: {id: id},
                include: [
                {
                    model: Produtos
                }
            ]
            })
            return res.status(201).json(pedidos) 

        } catch (error) {
            console.log(error)
            return res.status(500).json("Algo errado aconteceu, chame ajuda");
        }
    },

    async delete(req:Request,res:Response){
       
       try {
        const { id } = req.params

        const possuiDetalhes = await DetalhesPedido.count({
            where: {
                pedido_id: id,
              },
        })
        console.log(possuiDetalhes)

        if(possuiDetalhes == 0){
            return res.status(404).json("Pedido não encontrado")
        }
        await DetalhesPedido.destroy({
            where: {
                pedido_id: id,
              },
        })
        await Pedidos.destroy({
            where: {
                id,
              },
        })
        return res.sendStatus(204);
       } catch (error) {
        return res.status(500).json("Algo errado aconteceu, chame ajuda!");
       }
        

    }

};

export default PedidoController;
