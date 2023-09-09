import { Router } from "express";
import itinerariesController from '../controllers/itinerariesControls.js';

const {createOneItinerary, createManyItineraries,
    readAllItineraries, readAllItinerariesByCityId, readOneItineraryById, readOneItineraryByName,
    updateOneItinerary, deleteOneItinerary, readAllItinerariesByCity} = itinerariesController;

const itinerariesRouter = Router();

itinerariesRouter.post('/', createOneItinerary);
itinerariesRouter.post('/many', createManyItineraries);

itinerariesRouter.get('/', readAllItineraries);
itinerariesRouter.get('/:cityId', readAllItinerariesByCityId);
itinerariesRouter.get('/city/:city', readAllItinerariesByCity);
itinerariesRouter.get('/id/:id', readOneItineraryById);
itinerariesRouter.get('/name/:itinerary', readOneItineraryByName);

itinerariesRouter.put('/', updateOneItinerary);

itinerariesRouter.delete('/', deleteOneItinerary);

export default itinerariesRouter;