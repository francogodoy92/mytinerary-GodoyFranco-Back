import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
import itinerariesRouter from "./itinerariesRouter.js";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send("Welcome to Mytinerary DB");
})


indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)

export default indexRouter;
