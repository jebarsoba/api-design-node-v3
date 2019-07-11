import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log('logging')
    next()
}

app.get('/', (req, res) => {
    res.send({message: 'hello'})
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send({message: ok})
})

//
//<CRUD>
//
//Create
app.post('/data', (req, res) => {
    res.send(req.body)
})

//Read
//Route exact matching
app.get('/data', [log, log, log], (req, res) => {
    res.send({message: 'hello'})
})

//Update
app.put('/data', (req, res) => {

})

//Delete
app.delete('/data', (req, res) => {

})
//
//<CRUD>
//

//Route parameter matching
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    res.send({message: `This is your id argument: ${id}`})
})

export const start = () => {
    app.listen(3000, () => {
        console.log('server is on 3000')
    })
}
