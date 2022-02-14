import React from 'react'
import './Funds.css'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs';


const Funds = (props) => {
    
    
    return (
        <main>            
             <div class="cards ">
                     <h2>Add Funds</h2>
                     <hr/>
                     <div className=''>
                         <div className=''>
                            <div className=' container-fluid bg-white p-5'>                        
                                <div class='row '>
                                 {/* right hand container */}
                                    <div class='width-30'>                                        
                                        <div className='card-notsingle bg-primary text-light rounded border  text-secondary'>
                                            <p>You have 1 unpaid invoicewith a total balance of</p>
                                            <br/>
                                            <h4>N2500.00 </h4>
                                        </div>
                                    </div>
                                    {/* left hand container */}
                                    <div class='width-70'>
                                        <div class='d-flex '>
                                                <div class='d-block'>
                                                    <h2 class='mb-5'>Add Funds</h2>
                                                    <Tabs>
                                                        <TabList className='tab'>
                                                            <Tab id='tab'> 
                                                                <p class=" active text-secondary">Portal home/ </p>
                                                            
                                                            </Tab>
                                                            <Tab>
                                                            <p class="text-secondary">Client Area/ </p>
                                                            </Tab>
                                                            <Tab>
                                                                <p class='text-secondary'>My Quote</p>
                                                            </Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <div className='col-8 bg-white p-5'>
                                                                <form class='text-center m-auto'>
                                                                    <p class='text-secondary'>Payment Method:</p>
                                                                    <div class="form-group">
                                                                        <label for="exampleFormControlSelect1"></label>
                                                                        <select class="form-control-lg border-grey" id="exampleFormControlSelect1">
                                                                            <option class='p-2'>Paystack (Subscription)</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                            <option>4</option>
                                                                            <option>5</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class='d-block'>
                                                                        <p class='text-secondary text-left'>Amount to Add: </p>
                                                                        <div class='d-flex form-group'>
                                                                            <button class='funds-button btn text-bold p-2'>N15</button>
                                                                            <button class='funds-button btn text-bold p-2'>N50</button>
                                                                            <button class='funds-button btn text-bold p-2'>N75</button>
                                                                            <button class='funds-button btn text-bold p-2'>N100</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class='form-group d-flex'>
                                                                        <input class='form-control' type='search' placeholder=''/>
                                                                        <button class='fund-blue-button ml-2 btn-primary'> Add Fund</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </TabPanel>
                                                    </Tabs>
                                                </div>
                                                <form>
                                                    <div class='form-group mb-5'>
                                                        {/* <input type="search" class='form-control' placeholder="Search here"/> */}
                                                        <small class='text-secondary'>Deposite money in advance</small>
                                                    </div>
                                                </form>



                                                {/*.................................... modal ......................................*/}

                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                        <div class="modal-header bg-grey">
                                                            <h5 class="modal-title" id="exampleModalLabel">#quote1582769</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            ...
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Pay Now</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*................................... end of modal................................. */}
                                            
                                        </div>
                                    </div>
                                </div>
                 </div>
                 </div>
            </div>
             </div>                
        </main>
    )
}

export default Funds

