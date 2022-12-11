const express = require("express")
const router = express.Router()
const Book = require("../model/Book")
const booksController = require("../controllers/books-controller")

router.get("/", booksController.getAllBooks)
router.post("/", booksController.addBook)
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateBook)
router.delete("/:id", booksController.deleteBook)

module.exports = router

/*
"book": {
		"name": "Sample",
		"author": "ABC",
		"description": "this is sample",
		"price": 2022,
		"available": true,
		"image": "http://www.plookfriends.com/blog/content/detail/79305/"
	}
 */
