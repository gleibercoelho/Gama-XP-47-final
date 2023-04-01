import express from "express";

import AuthController from "./auth.controller";


import loginValidation from "./validations";

const authRoutes = express.Router();


authRoutes.post("/login", loginValidation.login, AuthController.login);

export default authRoutes;