const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.get("/stu", (req, res) => {
  res.send({
    status: "ok",
    data: {
      name: "孙悟空",
      age: 55,
    },
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
