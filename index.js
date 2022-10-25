const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000 ;

const courses =  require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From codify!')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Codify server running on ${port}`)
})