const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/book-routes")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/books", router)

mongoose
  .connect(
    "mongodb+srv://user2:dsNuyRBYH8Yw0g6a@cluster0.zjprqqd.mongodb.net/?retryWrites=true&w=majority",
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => console.log(err))

// "mongodb+srv://admin:gTZgx6EIgpGP5PyA@cluster0.zjprqqd.mongodb.net/?retryWrites=true&w=majority"
// user2:dsNuyRBYH8Yw0g6a

// admin0:urgeJM8lFSNzhbKW
