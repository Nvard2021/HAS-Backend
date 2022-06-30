import express from "express"

const app = express();
app.get("/",(rec,res)=>{
  res.send("hello world")
})

app.listen(3001)