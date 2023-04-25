import {Router} from "express";
import UsuarioController from "./usuario.controller";
import UsuarioValidation from "./validations";
import Auth from "../../middlewares/authToken";


const usuarioRoutes = Router();


usuarioRoutes.get("/usuarios",Auth.verifyAdmin, UsuarioController.getAll);
usuarioRoutes.get("/usuarios/:id",Auth.verifyUser,UsuarioValidation.getOne,UsuarioController.getOne);
usuarioRoutes.post("/usuarios",UsuarioValidation.create, UsuarioController.create);
usuarioRoutes.post("/usuariosadmin",Auth.verifyAdmin, UsuarioValidation.create, UsuarioController.createAdmin);
usuarioRoutes.put("/usuarios/:id",Auth.verifyUser,UsuarioValidation.update,UsuarioController.update);
usuarioRoutes.delete("/usuarios/:id",Auth.verifyUser,UsuarioValidation.destroy,UsuarioController.delete)

export default usuarioRoutes;