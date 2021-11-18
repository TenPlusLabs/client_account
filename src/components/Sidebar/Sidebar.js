import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Account</div>,
        main:() => <h1>Account</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Order</div>,
        main:() => <h1>Order</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Order</div>,
        main:() => <h1>Order</h1>
    },
    {
        path: "/",
        sidebar: () => <div>yy</div>,
        main:() => <h1>yy</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Messages</div>,
        main:() => <h1>Messages</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Details</div>,
        main:() => <h1>Details</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Address book</div>,
        main:() => <h1>Address book</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Change Password</div>,
        main:() => <h1>Change Password</h1>
    },
    {
        path: "/",
        sidebar: () => <div>Logout</div>,
        main:() => <h1>Logout</h1>
    }
]

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
       
            <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
                <input type="checkbox" name="" id="nav-toggle"/>
                <i className="las la-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
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
                            <NavLink to="/Order" class="active"><span class="las la-users"></span>
                            <span>Orders</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Ticket"><span class="las la-ship"></span>
                            <span>Ticket</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Pending-reviews"><span class="las la-clipboard-list"></span>
                            <span>Pending Reviews</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Messages"><span class="las la-circle"></span>
                            <span>Messages</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Details"><span class="las la-receipt"></span>
                            <span>Details</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Address-book"><span class="las la-circle"></span>
                            <span>Address Book</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="Change-password"><span class="las la-circle"></span>
                            <span>Change Password</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="Log-out"><span class="las la-circle"></span>
                            <span>Log out</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
       
    )
}

export default Sidebar
