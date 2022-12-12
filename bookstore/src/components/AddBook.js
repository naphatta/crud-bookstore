import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  })
  const [checked, setchecked] = useState(false)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    //console.log(e.target.name,"Value",e.target.value);
  }
  const sendRequest = async () => {
    axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs, checked)
    sendRequest().then(() => history("/books"))
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullwidth
          variant="outlined"
          name="name"
        />

        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullwidth
          variant="outlined"
          name="author"
        />

        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullwidth
          variant="outlined"
          name="description"
        />

        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullwidth
          variant="outlined"
          name="price"
        />

        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullwidth
          variant="outlined"
          name="image"
        />

        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setchecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  )
}

export default AddBook
