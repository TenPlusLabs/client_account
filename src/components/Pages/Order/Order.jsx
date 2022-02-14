import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import './order.css'



const Order = () => {
    

    return (
        <main>            
            <div class="cards">
                    <h2>Order</h2>
                    <hr/>
                    
                    <Tabs>
                    <div class='p-3 mb-5'>
                        <div class='float-left mt-3 mb-3 d-flex'>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Status
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/#">Complete</a>
                                    <a class="dropdown-item" href="/#">InComplete</a>
                                    <a class="dropdown-item" href=".#">In progress</a>
                                    <a class="dropdown-item" href=".#">Not Started</a>
                                </div>
                            </div>
                          <div class=' ml-2 d-flex'>
                                <div class='round-circle-complete ml-2'></div>
                                <div class='ml-2'> Incomplete</div>
                            </div>

                        </div>
                        <div class='float-right mt-3 mb-3'>
                            <button class='btn btn-primary'>View Chart</button>
                        </div>
                    </div>
                        <TabList className='order-tab'>
                            <Tab id='tab'> 
                                <button class="mt-2 active">Open Orders (0)</button>
                            
                            </Tab>
                            <Tab>
                            <button class="mt-2">Closed Orders (0)</button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='status'>Delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                                <div className='order-button'>
                                    <button>Rate this Product</button>
                                </div>
                            </div>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='status'>Delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                                <div className='order-button'>
                                    <button>Rate this Product</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='n-status'>Not-delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                                <div className='order-button'>
                                    <button>Rate this Product</button>
                                </div>
                            </div>
                            <div className='order-container'>
                                <div className='order-image'></div>
                                <div className='order-details'>
                                    <p>100000mah ultra slim fast charging power banks</p>
                                    <p>Order no: 34561234</p>
                                    <p className='n-status'>Not-delivered</p>
                                    <p> on 24-09-19</p>
                                </div>
                                <div className='order-button'>
                                    <button>Rate this Product</button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>


            </div>
        </main>
    )
}


export default Order
