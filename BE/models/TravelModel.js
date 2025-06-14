import mongoose from 'mongoose'


const TravelSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number
});

export const TravelModel = mongoose.model('travel', TravelSchema);
