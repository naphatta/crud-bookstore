import { Box, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Box sx={{ marginTop: 10 }} display="flex" flexDirection="column" alignItems="center">
        <h2>Welcome</h2>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "blue" }}
          variant="contained"
        >
          <h3>View All product.</h3>
        </Button>
      </Box>
    </div>
  )
}

export default Home
