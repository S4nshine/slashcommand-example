const express = require('express')
const app = express()

app.use(express.json())     
app.use(express.urlencoded({ extended: false }));

app.post("/challenge",(req,res)=>{
  var challenge = req.body.challenge;
  res.send(challenge);
});

app.post("/command",(req,res) => {
  var r = req.body
  console.log(r.response_url);
  res.status(200);
  res.header("Content-Type: application/json")
  res.send("hello world");
})

app.listen(3000,()=>{
  console.log("server started");
})


