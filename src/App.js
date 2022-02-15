import {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Details from './components/Pages/Details/Details';
import Homepage from './components/Pages/Homepage';
import  './components/Pages/Homepage.css';
import Order from './components/Pages/Order/Order';
import Password from './components/Pages/Password/Password';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Address from './components/Pages/Address-book/Address';
import Quote from './components/Pages/Quotes/Quote';
import Invoice from './components/Pages/Invoice/Invoice'
import Funds from './components/Pages/Funds/Funds'
import Ticket from './components/Pages/Ticket/Ticket.js'
import PendingReview from './components/Pages/Pending-review/Pending-review.js'
import Coupon from './components/Pages/Coupon/Coupon.js'
import Messages from './components/Pages/Messages/Messages';


const App = () => {

  return (
    <div className="">
      <h1>TenPlus</h1>
      
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/details' element={<Details/>}/>
        <Route exact path='/order' element={<Order/>}/>
        <Route exact path='/messages' element={<Messages/>}/>
        <Route exact path='/ticket' element={<Ticket/>}/>
        <Route exact path='/quotes' element={<Quote/>}/>
        <Route exact path='/pending-reviews' element={<PendingReview/>}/>
        <Route exact path='/address-book' element={<Address/>}/>
        <Route exact path='/change-password' element={<Password/>}/>
        <Route exact path='/logout' element={<Order/>}/>
        <Route exact path='/invoice' element={<Invoice/>}/>
        <Route exact path='/add-funds' element={<Funds/>}/>
        <Route exact path='/coupon' element={<Coupon/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
