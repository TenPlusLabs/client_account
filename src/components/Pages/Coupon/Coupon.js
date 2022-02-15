import React from 'react'
import pic from '../Pending-review/pic.jpg'


const Coupon = () => {
  return (
    <main>
            <div class="cards">
                <h2>Coupon(2)</h2>
                <hr/>
                <div className='review-card-container'>
                    <div className='review-container'>
                        <div className='review-image'></div>
                        <div className='review-details'>
                            <p>100000mah ultra slim fast charging power banks</p>
                            <p>Order no: 34561234</p>
                            <p class='text-success'>30% off till 24-09-19</p>
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
                            <p>20% off till Nov 2022</p>
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

export default Coupon