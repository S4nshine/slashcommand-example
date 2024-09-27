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
  fetch(r.response_url,{
     headers: {
      "Content-Type":"appplication/json"
     },
     "method":"POST",
     "body":"{'response_type':'in_channel','text':'hello world'}"
  })
  res.status(200);
  res.header("Content-Type: application/json")
  res.send("");
})

app.listen(3000,()=>{
  console.log("server started");
})


