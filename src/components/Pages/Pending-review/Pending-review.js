import React from 'react'
import './Pending-review.css'

const Pending = () => {
    return (
        <main>
            <div class="cards">
                <h2>Pending review</h2>
                <hr/>
                <div className='review-card-container'>
                    <div className='review-container'>
                        <div className='review-image'></div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p>Delivered on 24-09-19</p>
                        </div>
                        <div className='review-button'>
                            <button>Rate this Product</button>
                        </div>
                    </div>
                    <div className='review-container'>
                        <div className='review-image'></div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p>Delivered on 24-09-19</p>
                        </div>
                        <div className='review-button'>
                            <button>Rate this Product</button>
                        </div>
                    </div>
                </div>
            </div>   
        </main>
    )
}

export default Pending
