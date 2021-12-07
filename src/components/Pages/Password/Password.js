import React from 'react'
import './Password.css'

const Password = () => {
    return (
        <main>
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
                <div>
                    <input type='submit' value='save' className="button"/>
                </div>
           </form> 
        </main>
    )
}

export default Password
