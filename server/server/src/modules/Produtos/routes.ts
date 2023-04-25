import {Router} from "express";
import ProdutoController from "./produto.controller";
import ProdutoValidation from "./validations";
import Auth from "../../middlewares/authToken";
import upload from "../../middlewares/upload";

const produtoRoutes = Router();


produtoRoutes.get("/produtos", ProdutoController.getAll);
produtoRoutes.get("/produtoscategoria/:id",ProdutoValidation.getOne,ProdutoController.getByCategory);
produtoRoutes.get("/produtos/:id",ProdutoValidation.getOne,ProdutoController.getOne);
produtoRoutes.post("/produtos",Auth.verifyAdmin,upload.single('foto'),ProdutoValidation.create, ProdutoController.create);
produtoRoutes.put("/produtos/:id",Auth.verifyAdmin,upload.single('foto'),ProdutoValidation.update,ProdutoController.update);
produtoRoutes.delete("/produtos/:id",Auth.verifyAdmin,ProdutoValidation.destroy,ProdutoController.delete)

export default produtoRoutes;