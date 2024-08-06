/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import "./App.css";
import HomePage from './components/HomePage';
import LatestBlog from './components/LatestBlog';
import OldBlog from './components/OldBlog';
import SingleBlog from './components/SingleBlog';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBlog from './components/AddBlog';
import NavBar from './components/NavBar';

function App() {

  const Layout = () => {
    return(
      <>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path='latestBlog' element={<LatestBlog/>} />
            <Route path='oldBlog' element={<OldBlog/>} />
            <Route path='singleBlog' element={<SingleBlog/>} />
            <Route path='login' element={<Login/>} />
            <Route path='regist' element={<Signup/>} />
            <Route path='addBlog' element={<AddBlog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
