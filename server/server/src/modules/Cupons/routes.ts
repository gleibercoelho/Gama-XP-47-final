import {Router} from "express";
import CupomController from "./cupom.controller";
import Auth from "../../middlewares/authToken";
import CupomValidation from "./validations";

const cuponsRoutes = Router();


cuponsRoutes.get("/cupons" ,CupomController.getAll);
cuponsRoutes.get("/cupons/:id",CupomValidation.getOne,CupomController.getOne);
cuponsRoutes.post("/cupons", Auth.verifyAdmin,CupomValidation.create, CupomController.create);
cuponsRoutes.put("/cupons/:id",Auth.verifyAdmin,CupomValidation.update,CupomController.update);
cuponsRoutes.delete("/cupons/:id",Auth.verifyAdmin,CupomValidation.destroy,CupomController.delete);

export default cuponsRoutes;