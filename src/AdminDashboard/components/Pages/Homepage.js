import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import '../index.css'
import { Route, Routes } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            <div className='main-content'>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Main/>} />
                </Routes>
                
            </div>
        </div>
    )
}

export default Homepage
