import React from 'react';
import './Homepage.css'
import ChartOne from './Charts/ChartOne.js'
import ChartTwo from './Charts/ChartTwo.js'
import ChartThree from './Charts/ChartThree.js'
import ChartFour from './Charts/ChartFour';
import ChartFive from './Charts/ChartFive';
import ChartSix from './Charts/ChartSix';

function Homepage() {
    return (
        <main>            
            <div class="cards">
                <h2>Account Overview</h2>
                <hr/>
                <div className='card-container'>
                    
                    <div class='container-fluid'>
                        <div class='row justify-content-between'>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Costs</h3>
                                <hr/>
                                <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartOne/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Costs</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartOne/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Tasks</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartTwo/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Tasks</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartTwo/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow'>
                                <h3 class='p-2'>Workload</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartThree/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Workload</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartThree/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Time</h3>
                                <hr/>
                                <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartFour/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Time</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartFour/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Progress</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartFive/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Progress</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartFive/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-4 shadow mt-4 mb-3'>
                                <h3 class='p-2'>Health</h3>
                                    <hr/>
                                    <p type="button" class="btn " data-toggle="modal" data-target="#exampleModal">
                                    <ChartSix/>
                                </p>
                                
                                {/* modal to zoom image */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Health</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-5">
                                            <div class='p-5'>
                                                <ChartSix/>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Homepage
