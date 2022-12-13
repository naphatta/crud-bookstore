const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Book", bookSchema)

/*
{
	"name" : "Sample",
	"author" : "ABC",
	"amount" : "10",
	"price" : "2022",
	"available": true
}
*/
