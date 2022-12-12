import { Box } from "@mui/material"
import React from "react"
import "./Font.css"

const About = () => {
  return (
    <div className="Font">
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>This is a CRUD Application.</h1>
        <h2>Book store website.</h2>
        <img src = "https://cdn.discordapp.com/attachments/879035025302102066/1051693464900874250/image.png" ></img>
        <h3>นางสาวชุติกาญจน์ คำเสม 6434419123</h3>
        <h3>นางสาวญาณิศา เทพี 6434421323</h3>
        <h3>นายนภัสธ ชินอักษร 6434441923</h3>
        <h3>นายพุฒิพงศ์ ทั่งจันทร์ 6434464323</h3>
        <h3>นายรชต พิริยวิรุตม์ 6434478123</h3>
      </Box>
    </div>
  )
}

export default About
