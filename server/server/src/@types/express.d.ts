import { Usuarios } from "../models"

declare global {
    namespace Express {
        export interface Request {
            user: Partial<Usuarios>
        }
    }
}