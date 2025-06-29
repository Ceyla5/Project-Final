import { Router } from "express"
import { loginController, registerController } from "../controllers/AuthController.js"

export const authRouter = Router()

authRouter.post('/login', loginController)
authRouter.post('/register', registerController)
