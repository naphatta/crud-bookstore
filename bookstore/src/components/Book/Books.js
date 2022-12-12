import React, { useEffect, useState } from "react"
import "./Book.css"
<<<<<<< HEAD
import axios from 'axios'
import Book from './Book'
const URL ="http://localhost:5001/books"
=======
import axios from "axios"
import Book from "./Book"
const URL = "http://localhost:5000/books"
>>>>>>> c840e35a959a484f1629ea881c6d07ed08ac2210

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}
const Books = () => {
  const [books, setBooks] = useState()
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books))
  }, [])
  console.log(books)
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <div className="book" key={i}>
              <Book book={book} />
            </div>
          ))}
      </ul>
    </div>
  )
}

export default Books
