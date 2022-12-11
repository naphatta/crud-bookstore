import React, { useState } from "react"
import { Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import UilUser from "@iconscout/react-unicons/icons/uil-user"
import { FormTmpl, TextField, PasswdField } from "./common"
import { useToast } from "./toast"

const Login = () => {
  const [email, setEmail] = useState("")
  const [passwd, setPasswd] = useState("")
  const toast = useToast()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log({
      email,
      passwd,
    })

    // connnect api

    // if api response fail
    // toast({ msg: "fail ediot", type: "error" })

    // else if api respones success
    // toast({ msg: "welcome back", type: "success" })

    // example toast
    toast({ msg: "this is toast message", type: "success" })
  }

  return (
    <>
      <FormTmpl
        logo={UilUser}
        imgComponent={
          <Stack direction="row" justifyContent="center">
            <img
              className="w-50"
              src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.15752-9/318111210_1389804678219691_8934022993867740944_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FjilvR1pQ9IAX-DCl4t&_nc_ht=scontent.fbkk5-5.fna&oh=03_AdRBJN6muDLJMCkSdQSbAt4ZpElvA9dR5A_xH1nfz_heeA&oe=63BD3E03"
            />
          </Stack>
        }
        btnName="Log in"
        footer={
          <div className="d-flex justify-content-between mt-4">
            <NavLink className="d-block" to="/">
              back to main page
            </NavLink>

            <div>
              <p className="d-inline">New member?</p>
              <NavLink className="ms-2" id="singun-btn" to="/sign-up">
                Singup here
              </NavLink>
            </div>
          </div>
        }
        fields={[
          <TextField
            title="Email address"
            placeholder="mail@mail.com"
            value={email}
            onValueChange={setEmail}
          />,

          <PasswdField
            title="Password"
            placeholder="your password"
            passwd={passwd}
            onPasswdChange={setPasswd}
          />,
        ]}
        onSubmit={handleFormSubmit}
      />
    </>
  )
}

export default Login
