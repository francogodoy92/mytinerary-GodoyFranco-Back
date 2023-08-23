import { Router } from "express";
import citiesControls from '../controllers/citiesControls.js';

const {createOneCity, createManyCities,
    readAllCities, readOneCityById,
    updateOneCity, deleteOneCity} = citiesControls;

const citiesRouter = Router();

citiesRouter.post('/', createOneCity);
citiesRouter.post('/many', createManyCities);
citiesRouter.get('/', readAllCities);
citiesRouter.get('/id/:ObjectId', readOneCityById);
citiesRouter.put('/', updateOneCity);
citiesRouter.delete('/', deleteOneCity);

export default citiesRouter;