import mongoose from 'mongoose'


const TravelSchema = new mongoose.Schema({
        image: String,
        name: String,
        description: String,
        contact: {
            phone: {
                type: String,
                required: false 
            },
            instagram: {
                type: String,
                required: false 
            }
        },
        price: Number
});

export const TravelModel = mongoose.model('travel', TravelSchema);
