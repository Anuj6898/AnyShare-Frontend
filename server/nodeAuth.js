const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")
const app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors())

const PORT = 3000

app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})

app.get("/login",(req,res)=>{
    res.render("views\login.html")
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server Live at Port: ${PORT}`)
})