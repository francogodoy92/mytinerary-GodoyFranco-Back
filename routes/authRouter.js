import { Router } from "express";
import authController from "../controllers/authControls.js";

const authRouter = Router();

const { signUp } = authController

// itinerariesRouter.get('/', );
// itinerariesRouter.get('/:id', );

authRouter.post('/', signUp);

// itinerariesRouter.put('/:id', );
// itinerariesRouter.delete('/:id', );

export default authRouter;