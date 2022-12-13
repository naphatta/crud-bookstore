import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import UilUserPlus from "@iconscout/react-unicons/icons/uil-user-plus"
import { FormTmpl, TextField, PasswdField } from "./common"
import { useToast } from "./toast"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [passwd, setPasswd] = useState("")
  const [confirmPasswd, setConfirmPasswd] = useState("")
  const toast = useToast()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log({
      email,
      passwd,
      confirmPasswd,
    })
    const token=localStorage.getItem('token')
    var myheaders =new Headers();
    myheaders.append("Content-Type", "application/json")

      
    var raw =JSON.stringify({
      "fname": email,
      "lname": email,
      "username": email,
      "password": passwd,
      "email": email,
      "avatar": "https://www.melivecode.com/users/cat.png",
    })
    const options = {
      method: 'POST',
      headers: myheaders,
      body: raw,
      redirect:'follow'
    };
    
    if(passwd!==confirmPasswd){toast({ msg: "fail passw", type: "error" })}
    else{
      fetch('https://www.melivecode.com/api/users/create', options)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          if(result.status === 'ok'){
            toast({ msg: "success", type: "success" })
            .then(()=>{
              navigate('/login')
            })
          }
          else{
            toast({ msg: "fail ediot", type: "error" })
          }
        })
        .catch(err => console.error(err));  
    }
    
  }

  return (
    <FormTmpl
      logo={UilUserPlus}
      imgComponent={
        <img
          className="w-100"
          src="https://media.istockphoto.com/vectors/vector-of-book-store-in-green-with-brown-door-vector-id468420738?k=6&m=468420738&s=612x612&w=0&h=SzXgnsb6G8sPmoowMuM2wcYtE8eBtSmfe0RqlVzzdys%3D&fbclid=IwAR3E92BHwyPm_ZA4cDVQ3WEsrqDEzfc5uX3WDwo8xHwUwX4kACkr6M-M8Kw"
        />
      }
      btnName="Sign up now"
      footer={
        <div className="d-flex justify-content-between mt-4">
          <NavLink className="d-block" to="/">
            back to main page
          </NavLink>

          <div>
            <p className="d-inline">Have account?</p>
            <NavLink className="ms-2" id="singun-btn" to="/login">
              Sign in
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
          placeholder="password"
          passwd={passwd}
          onPasswdChange={setPasswd}
        />,

        <PasswdField
          title="Confirm password"
          placeholder="confirm password"
          passwd={confirmPasswd}
          onPasswdChange={setConfirmPasswd}
        />,
      ]}
      onSubmit={handleFormSubmit}
    />
  )
}

export default SignUp
