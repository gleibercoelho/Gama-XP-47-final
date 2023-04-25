import { Request, Response } from "express";
import { Categorias, Produtos } from "../../models";


const CategoriaController = {
  async getAll(req: Request, res: Response) {
    try {
      const categorias = await Categorias.findAll();

      return res.json(categorias);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const categoria = await Categorias.findByPk(id);

      return res.json(categoria);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  async create(req: Request, res: Response) {
    try {
      const newCategoria = await Categorias.create({
        ...req.body,
      });

      return res.status(201).json(newCategoria);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const payloadUpdate = {};

      Object.assign(payloadUpdate, req.body);

      await Categorias.update(payloadUpdate, {
        where: { id },
      });

      const categorias = await Categorias.findByPk(id);

      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json("Algo errado aconteceu, chame ajuda!");
    }
  },
  async delete(req: Request, res: Response){
    try {
      const { id } = req.params
      const possuiProdutos = await Produtos.count({
        where: {
          categoria: id,
        }
      })
      if(possuiProdutos){
        return res.status(401).json("Existe produtos associados a essa categoria, não é possivel deletar!");
      }
      await Categorias.destroy({
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

export default CategoriaController;
