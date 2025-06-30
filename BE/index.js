import express from "express"
import TravelRouter from "./routers/TravelRoutes.js"
import {authRouter} from "./routers/AuthRouter.js" 
import cors from "cors"
import './config/config.js'
import 'dotenv/config'


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/travels", TravelRouter)
app.use("/api/auth", authRouter) 

app.listen(3000, ()=>{
  console.log("Bu app 3000 portunda dinlenilir")
})
