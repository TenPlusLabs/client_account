import React from 'react'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import './order.css'



const Order = () => {
    

    return (
        <main>            
            <div class="cards">
                    <h2>Orders</h2>
                    <hr/>
                    <Tabs>
                        <TabList className='tab'>
                            <Tab> 
                                <button class="tablinks active">Open Orders (0)</button>
                            
                            </Tab>
                            <Tab>
                            <button class="tablinks">Closed Orders (0)</button>
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
                        </TabPanel>
                    </Tabs>


            </div>
        </main>
    )
}


export default Order
