import express from 'express';
const app: express.Application = express();
import mongoose from './config/database'

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection failed'))
db.once('open', function () {
    console.log('succesfully connected')
})
const PORT: any = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('started')
}) 
app.get('/', (req, res) => {
    res.send({
        message: "It is working now!"
    })
})
app.use(express.json())
app.use('/', require('./src/router'))