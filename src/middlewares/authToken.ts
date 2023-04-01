const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express';
import secret from "../infra/configs/secret";

function authToken( req:Request, res:Response, next:NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) return res.status(400).json("Token não encontrado");

  try {
    jwt.verify(token, secret.key)
    next()
  } catch (error) {
    return res.status(500).json("Algo errado aconteceu, chame ajuda!");
  }

}

export default {
    authToken
}