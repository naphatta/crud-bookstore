import React, { useState } from "react"
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [value, setValue] = useState()
  const [isLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <MenuBookOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            <Tab LinkComponent={NavLink} to="/sign-up" label="Sign up" />
            {!isLoggedIn ? (
              <Tab LinkComponent={NavLink} to="/login" label="Login" />
            ) : (
              <Tab
                label="Logout"
                LinkComponent={NavLink}
                onClick={() => {
                  localStorage.setItem("isLoggedIn", JSON.stringify(false))
                  document.location.href = "/"
                }}
              />
            )}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
