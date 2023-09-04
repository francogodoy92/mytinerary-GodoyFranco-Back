import { Router } from "express";
import itinerariesController from '../controllers/itinerariesControls.js';

const {createOneItinerary, createManyItineraries,
    readAllItineraries, readAllItinerariesByCityId, readOneItineraryById, readOneItineraryByName,
    updateOneItinerary, deleteOneItinerary} = itinerariesController;

const itinerariesRouter = Router();

itinerariesRouter.post('/', createOneItinerary);
itinerariesRouter.post('/many', createManyItineraries);

itinerariesRouter.get('/', readAllItineraries);
itinerariesRouter.get('/:cityId', readAllItinerariesByCityId);
itinerariesRouter.get('/id/:id', readOneItineraryById);
itinerariesRouter.get('/name/:itinerary', readOneItineraryByName);

itinerariesRouter.put('/', updateOneItinerary);

itinerariesRouter.delete('/', deleteOneItinerary);

export default itinerariesRouter;