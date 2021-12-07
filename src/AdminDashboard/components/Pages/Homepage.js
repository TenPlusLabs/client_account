import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar'
import '../index.css'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            <div className='main-content'>
                <Navbar/>
                <Main/>
            </div>
        </div>
    )
}

export default Homepage
