import { Router } from "express";
import citiesRouter from "./citiesRouter.js";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send("Welcome to Mytinerary DB");
})

indexRouter.use('/cities', citiesRouter)

export default indexRouter;
