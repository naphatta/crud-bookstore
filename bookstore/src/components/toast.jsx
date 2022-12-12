import React, { createContext, useState, useContext } from "react"
import { Button, Snackbar, Alert } from "@mui/material"

const toastCtx = createContext()

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("success")
  const [msg, setMsg] = useState("")

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const setToast = ({ type, msg }) => {
    setOpen(true)
    setMsg(msg)
    if (type) {
      setType(type)
    }
  }

  return (
    <toastCtx.Provider value={setToast}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>{" "}
    </toastCtx.Provider>
  )
}

export const useToast = () => {
  const toastConfig = useContext(toastCtx)
  if (!toastConfig) {
    throw new Error("Component must be wrap with ToastProvider")
  }
  return toastConfig
}
