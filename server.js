const express = require("express")
const app = express()
const path = require('path')

// setup static folder
app.use(express.static(path.join(__dirname,'public')))




app.listen(8000, ()=> console.log("server is running"))