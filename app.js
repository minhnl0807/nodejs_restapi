// load our app server using express somehow
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOT")
})

app.get("/users", (req, res) => {
  var user1 = {firstName: "Minh", lastName: "Nguyen"}
  const user2 = {firstName: "Thanh", lastName: "Tran"}
  res.json([user1, user2])
  //res.send("Nodemon auto updates when I save this file")
})

// http://localhost:3003/
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})
