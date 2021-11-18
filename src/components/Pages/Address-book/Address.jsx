import React from 'react'
import './Address.css'

const Address = () => {
    return (
        <main>            
            <div class="cards">
                <h2>Address (0)</h2><button className='address-button float-right'>Add Address</button>
                <hr/>
                <div className='card-container'>
                    <div className='card-single'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>
                    <div className='card-single'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>
                    <div className='card-single'>
                        <p>Ahmad Busari</p>
                        <br/>
                        <p className='name'></p>
                        <p className='email'>
                        Room a4, kikelomo runsewe hostel, university of ilorin
                        university of ilorin teaching hospital
                         </p><br/><hr/>
                        <p className='homepage-link'>set as default  <span className='las la-pen'></span><span className='las la-trash'></span></p>
                    </div>             
                </div>
                <div className='no-orders'>
                        <p>You have No Address yet!</p>
                        <p>All your Address will be placed here for you to access their state anytime.</p>
                        <button>Add Address</button>
                    </div>
            </div>
        </main>
    )
}

export default Address
