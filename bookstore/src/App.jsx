import Header from "./components/Header"
import "./App.css"
import { Route, Routes, Navigate, json } from "react-router-dom"
import React, { useState } from "react"
import AddBook from "./components/AddBook"
import Books from "./components/Book/Books"
import About from "./components/About"
import BookDetail from "./components/Book/BookDetail"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import { ToastProvider } from "./components/toast"
import { useEffect } from "react"

function App() {

  const AuthWrapper = ({ isAuthenticated }) => {
    return isAuthenticated === true ? (
      <Navigate to="/books" element={<Books />} replace />
    ) : (
      <Navigate to="/login" element={<Login />} replace />
    )
  }
  const [isLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))
  // login
  // localStorage.setItem("isLoggedIn", JSON.stringify(true))
  // logout
  //  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  return (
    <ToastProvider>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<AuthWrapper isAuthenticated={isLoggedIn} />}
          />
          <Route path="/" element={<Books />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/sign-up" element={<SignUp />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </ToastProvider>
  )
}

export default App
// ok
