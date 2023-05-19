const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.sendFile("index.html")
    
})

app.post("/", (req, res)=>{
    let authors = require("./authors.json")
    res.json(authors)
})

app.listen(8080, ()=>console.log("listening"))