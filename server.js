//Step 1 - install express (npm install express)
//Step 2 - import express
const express = require("express")

//Step 3 - assign express to a variable
const app = express()

//Step 4 - declare a port
const port = 4000

//Step 6 - write endpoints
app.get("/", (request, response) => {
  console.log(request.path)
  response.send("Hello!")
})

app.get("/me", (request, response) => {
  console.log(request.path)
  response.send("Hello, I'm Karla!")
})

app.get("/fruit/:name", (request, response) => {
  const name = request.params.name
  response.send(`This fruit is a ${name}`)
})

//Step 5 - start listening
app.listen(port, 
  () => console.log(`Listening on ${port}`))

