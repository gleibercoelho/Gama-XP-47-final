import {Router} from "express";
import CategoriaController from "./categoria.controller";
import Auth from "../../middlewares/authToken";
import CategoriaValidation from "./validations";

const categoriaRoutes = Router();


categoriaRoutes.get("/categorias", CategoriaController.getAll);
categoriaRoutes.get("/categorias/:id",CategoriaValidation.getOne,CategoriaController.getOne);
categoriaRoutes.post("/categorias", Auth.verifyAdmin,CategoriaValidation.create, CategoriaController.create);
categoriaRoutes.put("/categorias/:id",Auth.verifyAdmin,CategoriaValidation.update,CategoriaController.update);
categoriaRoutes.delete("/categorias/:id",Auth.verifyAdmin,CategoriaValidation.destroy,CategoriaController.delete);

export default categoriaRoutes;