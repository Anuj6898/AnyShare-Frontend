const cors = require("cors")
const express = require("express")
const app = express()
const body_parser  = require("body-parser")

console.log("Starting server")
app.use(body_parser.json())
// app.use(body_parser({extended:false}))

app.get("/",cors(),(req,res)=>{
    res.send("Hello World")
})

app.post("/home",cors(),(req,res)=>{
    console.log(req.body)
    res.send(req.body)
    
})

app.listen(80,()=>{
    console.log("Server Started at Port: 80")
})
