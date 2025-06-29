import express from 'express'
import {createTravel,deleteByIdTravel, updateByIdTravel, getTravels, getTravel} from '../controllers/TravelController.js'
import { verifyAccess } from '../middleware/AuthMiddleware.js'


const router = express.Router()

router.get('/', getTravels)
router.get('/:id', getTravel)
router.post('/',verifyAccess(["user","admin"]), createTravel)
router.put('/:id',verifyAccess(["user","admin"]), updateByIdTravel)
router.delete('/:id',verifyAccess(["user","admin"]), deleteByIdTravel)   

export default router
