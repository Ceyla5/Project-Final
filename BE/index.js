import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://jeylasgbf206:jeylasgbf206@cluster0.1xsi3cl.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('NOT Connected!'))

const FinalProjectSchema = new mongoose.Schema({
  name: String
});
const FinalProject = mongoose.model('Kitten', FinalProjectSchema);

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
