import React from "react"

export const TextField = ({ title, placeholder, value, onValueChange }) => {
  return (
    <>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {title}
      </label>
      <input
        name="myEmail"
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  )
}
