const express = require('express')
const path = require('path')


const { lttbDownsample } = require('./lltb')
const app = express()
var cors = require('cors')
const { parseCSVtoJSON } = require('./parser')
const port =3001
app.use(cors()) 
app.use(express.static('public'))

app.get('/',(req,res)=>{
    const csvFilePath = path.join(__dirname, 'public', 'dataset.csv');
    const data = parseCSVtoJSON(csvFilePath)

    const result = lttbDownsample(data,100 )
    
    res.json(result)
    
})
app.listen(port,()=>{
    console.log(` app listening on port ${port}`)
})