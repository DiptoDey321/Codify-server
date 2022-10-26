const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000 ;
const courses =  require('./data/courses.json')
const courseList = require('./data/courseList.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From codify!')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/courseslist', (req, res) =>{
    res.send(courseList)
})

app.listen(port, () => {
    console.log(`Codify server running on ${port}`)
})