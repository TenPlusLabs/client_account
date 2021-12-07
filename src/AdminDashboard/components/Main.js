import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Main = () => {
    return (
        <main>
            <div className='container-fluid bg-light mt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='float-left d-flex justify-content-between'>
                            <div className=' '>
                                {/* <img src='' alt='' width='20rem' height='2rem' className='img-fluid' /> */}
                                <div style={{width:'50px', height:'50px', background:'blue', borderRadius:'50%', content:'a'}} />

                            </div>
                            <div className='ml-3'>
                                <h2>Hello Admin</h2>
                                <p className='text-grey'>17th ,January 2021</p>
                            </div>
                        </div>
                        <div className='float-right d-flex'>
                            <div className='border rounded m-2 pt-n3'>
                                <i className='las la-calender'/>
                                <p>07/01/2021 - 04/01/2021</p>
                            </div>
                            <div className='border rounded d-flex align-items-center m-2'>
                                <span className='las la-bars'></span>
                            </div>
                        </div>                        
                    </div>
                    <div className='col-lg-12 mt-3'>
                        <Tabs>
                            <TabList>
                                <Tab>All</Tab>
                                <Tab>Analytics</Tab>
                                <Tab>General</Tab>
                            </TabList>

                            <TabPanel>
                            <div className='container'>
                                <div className='row'>
                                    <div className='box border shadow w-100 h-100'>
                                        <div className='float-left'></div>

                                    </div>
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <h2>Any content 2</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>            
            <div class="cards">
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

export default Main
