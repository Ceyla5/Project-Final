import {TravelModel} from "../models/TravelModel.js"
import { TravelValidationSchema } from "../validations/validation.js";
 export const TravelController={
    getTravels: async  (req, res)=>{
        let travels = await TravelModel.find()
        res.send(travels)
    },
    getTravel: async (req, res)=>{
        let {id} = req.params
        let travel = await TravelModel.findById(id)
        res.send(travel)
    },
    postTravel: async  (req, res)=>{
        let {error} = TravelValidationSchema.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        } else {
            let newTravel = TravelModel(req.body)
            await newTravel.save()
            res.send(newTravel)
        }
        
    },
    deleteTravel: async  (req, res)=>{
        let {id} =req.params
        let deleteTravel = await TravelModel.findByIdAndDelete(id)
        res.send(deleteTravel)
    }
}