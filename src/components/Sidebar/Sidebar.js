import React from 'react'
import './Sidebar.css'

import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
       
            <div className=''id="sidebar">
                {/* <input type="checkbox" name="" id="nav-toggle"/> */}
                <i className="las la-times" id="sidebarIcon" ></i>
                <div class="sidebar-brand">
                    <h2><span class="las la-compress-arrows-alt"></span>
                        <span>Dashboard</span>
                    </h2>
                </div>            
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <NavLink to="/" ><span class="las la-igloo"></span>
                            <span>My Account</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="order" class=""><span class="las la-users"></span>
                            <span>Orders</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="ticket"><span class="las la-ship"></span>
                            <span>Ticket</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="pending-reviews"><span class="las la-clipboard-list"></span>
                            <span>Pending Reviews</span></NavLink>
                        </li>
                        <li>
                            
                                <NavLink to='' class="btn dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                    Billings
                                </NavLink>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <NavLink class="dropdown-item text-dark" to="quotes">Quotes</NavLink>
                                    <NavLink  class="dropdown-item  text-dark" to="invoice">Invoice</NavLink>
                                    <NavLink  class="dropdown-item text-dark" to="add-funds">Add Funds</NavLink>
                                </div>
                            
                        </li>
                        <li>
                            <NavLink to="messages"><span class="las la-circle"></span>
                            <span>Messages</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="details"><span class="las la-receipt"></span>
                            <span>My Details</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="address-book"><span class="las la-circle"></span>
                            <span>Address Book</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="change-password"><span class="las la-circle"></span>
                            <span>Change Password</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="log-out"><span class="las la-circle"></span>
                            <span>Log out</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
       
    )
}

export default Sidebar
