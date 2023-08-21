import {Schema, model, Types} from "mongoose";

let collection = "cities";

let citySchema = new Schema({
    country: {type: String, required: true},
    foundation:{type: String, required: true},
    population: {type: Number, required: true,},
    photo: {type: String, required: true},
    city: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    smalldescription: {type: String, required: true},
    featuredLocation: {type: String, required: true}
},{
    timestamps: true
})

let City = model(collection, citySchema);

export default City;
