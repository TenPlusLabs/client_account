import React from 'react'
import './Homepage.css'

function Homepage() {
    return (
        <main>            
            <div class="cards">
                <h2>Account Overview</h2>
                <hr/>
                <div className='card-container'>
                    <div className='card-single'>
                        <p>Account Details <span className='las la-pen'></span></p>
                        <hr/>
                        <p className='name'>kolade elizabeth</p>
                        <p className='email'>email@mail.com</p>
                        <p className='homepage-link'>change password</p>
                    </div>
                    <div className='card-single'>
                        <p>Account Details <span className='las la-pen'></span></p>
                        <hr/>
                        <p className='name'>kolade elizabeth</p>
                        <p className='email'>email@mail.com</p>
                        <p className='homepage-link'>change password</p>
                    </div>
                    <div className='card-single'>
                        <p>Account Details <span className='las la-pen'></span></p>
                        <hr/>
                        <p className='name'>kolade elizabeth</p>
                        <p className='email'>email@mail.com</p>
                        <p className='homepage-link'>change password</p>
                    </div>
                    <div className='card-single'>
                        <p>Account Details <span className='las la-pen'></span></p>
                        <hr/>
                        <p className='name'>kolade elizabeth</p>
                        <p className='email'>email@mail.com</p>
                        <p className='homepage-link'>change password</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Homepage
