import React from 'react'
import './Sidebar.css'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className='sidebar'>
            <div class="sidebar-brand">
                <h2><span class="las la-compress-arrows-alt"></span>
                    <span>Dashboard</span>
                </h2>
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                        <a href="" ><span class="las la-igloo"></span>
                        <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href="" class="active"><span class="las la-users"></span>
                        <span>Projects</span></a>
                    </li>
                    <li>
                        <a href=""><span class="las la-shipping-bag"></span>
                        <span>Orders</span></a>
                    </li>
                    <li>
                        <a href=""><span class="las la-clipboard-list"></span>
                        <span>Inventory</span></a>
                    </li>
                    <li>
                        <a href=""><span class="las la-receipt"></span>
                        <span>Customers</span></a>
                    </li>
                    <li>
                        <a href=""><span class="las la-circle"></span>
                        <span>Account</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
