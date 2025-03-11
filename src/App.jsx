import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";

import './App.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forum from "./pages/Forum";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/f/:forum" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/u/:user" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
