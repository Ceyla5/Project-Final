import express from 'express'
import {TravelController} from '../controllers/TravelController.js'

const router = express.Router()

router.get('/',TravelController.getTravels)
router.get('/:id',TravelController.getTravel)
router.post('/',TravelController.postTravel)
router.delete('/:id',TravelController.deleteTravel)

export default router