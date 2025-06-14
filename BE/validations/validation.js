import joi from "joi"

 export const TravelValidationSchema = joi.object({
    image: joi.string().uri().required(),
    name: joi.string().min(2).max(25).required(),
    price: joi.number().min(1).max(300).required(),
})