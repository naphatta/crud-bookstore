const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose
  .connect(
    "mongodb+srv://admin:gTZgx6EIgpGP5PyA@cluster0.zjprqqd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
    })
  .catch((err) => console.log(err));
// gTZgx6EIgpGP5PyA
