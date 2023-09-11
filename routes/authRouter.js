import { Router } from "express";
import authController from "../controllers/authControls.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import { signInSchema } from "../validators/signInValidator.js";
import validator from "../middlewares/validator.js";
import { emailExists } from "../middlewares/emailExists.js";
import passport from "../middlewares/passport.js";

const authRouter = Router();

const { signUp, signIn, loginWithToken } = authController

authRouter.get('/', validator(signInSchema), signIn)
authRouter.post('/', validator(signUpSchema), emailExists, signUp)
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ) ,loginWithToken)

export default authRouter;