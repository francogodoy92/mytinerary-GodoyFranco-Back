import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    name: {type: String, required: true},
    cityId: {type: Schema.ObjectId, ref:'Cities', required: true},
    authorName: {type: String, required: true},
    authorPhoto: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    duration: {type: Number, required: true},
    photo: {type: String, required: true},
    likes: {type: Number, default: 0},
    tematicHashtags: [String]
},{
    timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);

export default Itinerary;