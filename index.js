const express = require('express')
const app = express()
const port = process.env.port || 5000 ;

app.get('/', (req, res) => {
    res.send('Hello From codify!')
})

app.listen(port, () => {
    console.log(`Codify server running on ${port}`)
})