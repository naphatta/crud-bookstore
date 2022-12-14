import { Button } from "@mui/material"
import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Book.css"

const Book = (props) => {
  const history = useNavigate()
  const { _id, name, author, amount, price, image } = props.book
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"))
  }
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <h3>{price} Bath</h3>
      <p>จำนวนคงเหลือ : {amount}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>
        {" "}
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}
export default Book
