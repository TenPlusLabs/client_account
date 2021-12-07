import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <input type="checkbox" name="" id="nav-toggle"/>
    <div class="sidebar">
        <div class="sidebar-brand">
            <h2>
                <span class="las la-igloo"></span>
            </h2>
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                    <NavLink to="dashboard/" ><span class="las la-igloo"></span>
                    <span>Overview</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Properties" class="active"><span class="las la-igloo"></span>
                    <span>Post</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo"></span>
                    <span>Media</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Pages</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>comments</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Refferal</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo"></span>
                    <span>Forms</span></NavLink>
                </li>
                <li>
                    <NavLink to="dashboard/Loans"><span class="las la-igloo"></span>
                    <span>Customer</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Wallet"><span class="las la-igloo"></span>
                     <span>Pages</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Transactions"><span class="las la-igloo"></span>
                    <span>comments</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Refferal"><span class="las la-igloo"></span>
                    <span>Refferal</span></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><span class="las la-igloo"></span>
                    <span>Forms</span></NavLink>
                </li>
            </ul>
        </div>
    </div>
        </>
    )
}

export default Sidebar
