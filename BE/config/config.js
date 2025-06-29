import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.DB_Connect)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('NOT Connected!'))

