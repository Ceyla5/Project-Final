// import {TravelModel} from "../models/TravelModel.js"
// import { TravelValidationSchema } from "../validations/Validation.js";

//  export const TravelController={
//     getTravels: async  (req, res)=>{
//         let travels = await TravelModel.find()
//         res.send(travels)
//     },
//     getTravel: async (req, res)=>{
//         let {id} = req.params
//         let travel = await TravelModel.findById(id)
//         res.send(travel)
//     },
//     postTravel: async  (req, res)=>{
//         let {error} = TravelValidationSchema.validate(req.body)
//         if (error) {
//            return res.send(error.details[0].message)
//         } else {
//             let newTravel = TravelModel(req.body) 
//             await newTravel.save()
//             res.send(newTravel)
//         }
//     },
//     deleteTravel: async  (req, res)=>{
//         let {id} =req.params
//         let deleteTravel = await TravelModel.findByIdAndDelete(id)
//         res.send(deleteTravel)
//     }
// }

import { TravelModel } from "../models/TravelModel.js"

export const getTravels = async (req, res) => {
    try {
        const travels = await TravelModel.find({})
        res.status(200).send(travels)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getTravel = async (req, res) => {
    try {
        const { id } = req.params
        const travel = await TravelModel.findById(id)
        if (!travel) return res.status(404).send("Travel not found")
        res.status(200).send(travel)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const createTravel = async (req, res) => {
    try {
        const newTravel = new TravelModel(req.body)
        await newTravel.save()
        res.status(201).send(newTravel)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const updateByIdTravel = async (req, res) => {
    try {
        const { id } = req.params
        const travel = await TravelModel.findByIdAndUpdate(id, req.body, { new: true })
        if (!travel) return res.status(404).send("Travel not found")
        res.status(200).send(travel)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const deleteByIdTravel = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await TravelModel.findByIdAndDelete(id)
        if (!deleted) return res.status(404).send("Travel not found")
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
}
