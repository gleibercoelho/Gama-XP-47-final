import { Usuarios } from "../../models/";
import jwt from "jsonwebtoken";
import secret from "../../infra/configs/secret";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

const AuthController = {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const usuario = await Usuarios.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(400).json("Email não cadastrado!");
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("Senha invalida!");
    }

    const payload = {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      tipo: usuario.tipo,
    };

    const token = jwt.sign(payload, secret.key);

    return res.json({ ...payload, token });
  },
};

export default AuthController;
