import {Router} from "express";
import UsuarioController from "./usuario.controller";
import UsuarioValidation from "./validations";
import Auth from "../../middlewares/authToken";
import VerifyUser from "../../middlewares/authUserType";

const usuarioRoutes = Router();


usuarioRoutes.get("/usuarios",Auth.authToken, UsuarioController.getAll);
usuarioRoutes.get("/usuarios/:id",Auth.authToken,UsuarioValidation.getOne,UsuarioController.getOne);
usuarioRoutes.post("/usuarios",UsuarioValidation.create, UsuarioController.create);
usuarioRoutes.post("/usuariosadmin",VerifyUser.verifyUser, UsuarioValidation.create, UsuarioController.createAdmin);
usuarioRoutes.put("/usuarios/:id",Auth.authToken,UsuarioValidation.update,UsuarioController.update);

export default usuarioRoutes;