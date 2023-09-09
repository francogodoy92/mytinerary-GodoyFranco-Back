import { Router } from "express";
import citiesControls from '../controllers/citiesControls.js';

const {createOneCity, createManyCities,
    readAllCities, readOneCityById,
    updateOneCity, deleteOneCity, readOneCityByName} = citiesControls;

    
const citiesRouter = Router();

citiesRouter.post('/', createOneCity);
citiesRouter.post('/many', createManyCities);
citiesRouter.get('/', readAllCities);
citiesRouter.get('/id/:id', readOneCityById);
citiesRouter.get('/city/:name', readOneCityByName);
citiesRouter.put('/', updateOneCity);
citiesRouter.delete('/', deleteOneCity);

export default citiesRouter;