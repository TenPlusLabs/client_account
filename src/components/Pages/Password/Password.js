import React from 'react'
import './Password.css'

const Password = () => {
    return (
        <main>
            <div className='cards'>
                <h2>Password</h2>
                    <hr/>
                <form className='cards'>
                        <div className='password-form-wrap'>
                            <label className='label'>Password<span className='star'>*</span></label>
                            <input placeholder='Name' value='123456789' type='password' required/>
                        </div>
                        <div className='password-form-wrap'>
                            <label className='label'>Password<span className='star'>*</span></label>
                            <input placeholder='Name' value='123456789' type='password' required/>
                        </div>
                        <div className='password-form-wrap'>
                            <label className='label'>Password<span className='star'>*</span></label>
                            <input placeholder='Name' value='123456789' type='password' required/>
                        </div>                
                            <input type='submit' value='save' className="password-button"/>
                    
                </form>
            </div> 
        </main>
    )
}

export default Password
