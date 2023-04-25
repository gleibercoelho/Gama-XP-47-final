import { Request, Response, raw } from "express";
import { Categorias, DetalhesPedido, Pedidos, Produtos } from "../../models";


const ProdutoController = {
  async getAll(req: Request, res: Response) {
    try {
      const produtos = await Produtos.findAll({raw:true});

      //produto retorna nome da categoria, nao apenas o id, e a url da foto para o front
      for (var pos in produtos) { 
        if (produtos.hasOwnProperty(pos)) {
            const { nome } = await Categorias.findByPk(produtos[pos].categoria)
           produtos[pos].categoria = nome;
           produtos[pos].foto = "http://localhost:3000/imagens/" + produtos[pos].foto
       }
      }

      return res.json(produtos);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },

  async getByCategory(req: Request, res:Response){
    try {
      const { id } = req.params

      const produtos = await Categorias.findAll({
        where: { id },
        include: [
        {
            model: Produtos
        }
    ]
    })
   return res.status(201).json(produtos);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produto = await Produtos.findByPk(id);
      
      const { nome } = await Categorias.findByPk(produto.categoria)
      produto.categoria = nome
      produto.foto = "http://localhost:3000/imagens/" + produto.foto


      return res.json(produto);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { nome, preco, descricao, categoria } = req.body
      const file = req.file

      if(!file){
        return res.status(400).json("A foto é obrigatória")
      }

      const newProduto = await Produtos.create({nome,foto: file.filename ,preco, descricao, categoria })

      return res.status(201).json(newProduto);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const file = req.file;
      
      const payloadUpdate = {};

      Object.assign(payloadUpdate,req.body,{foto: file?.filename})
    
  
         await Produtos.update(payloadUpdate,{
          where: { id }
         })

      const produto = await Produtos.findByPk(id);

      return res.status(200).json(produto);
    } catch (error) {
      console.log(error)
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },

  async delete(req:Request,res:Response){

    try {
      const { id } = req.params
      const possuiPedidos = await DetalhesPedido.count({
      where: {
        produto_id: id,
      },
    })
    if (possuiPedidos) {
      return res
        .status(401)
        .json(
          "Existe pedidos associados a esse produto, não é possivel deletar!"
        );
    }
    await Produtos.destroy({
      where: {
        id,
      },
    });

    return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
    

  },
  
};

export default ProdutoController;
