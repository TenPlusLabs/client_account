import React from 'react'
import './Pending-review.css'
import pic from './pic.jpg'



const PendingReview = () => {
    return (
        <main>
            <div class="cards">
                <h2>Pending review(2)</h2>
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
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={pic} class="d-block w-50 image-responsive" alt="..."/>
                        <div>
                            <p>Black view Android</p>
                            <p>N50,000</p>
                            <p class='text-overline'>N70,000</p>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>   
        </main>
    )
};

export default PendingReview;
