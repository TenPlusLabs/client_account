import {useState, useCallback} from 'react';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Pages/Details/Details';
import Homepage from './components/Pages/Homepage';
import Order from './components/Pages/Order/Order';
import Password from './components/Pages/Password/Password';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Address from './components/Pages/Address-book/Address';
import Pending from './components/Pages/Pending-review/Pending-review'
import Messages from './components/Pages/Messages/Messages';
import Ticket from './components/Pages/Ticket/Ticket';

const App = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);
const toggleSidebar = useCallback(() => setSidebarOpen(value => !value));

// const openSidebar = () =>{
//   setSidebarOpen(true);
// }
// const closeSidebar = () =>{
//   setSidebarOpen(false);
// }
  return (
    <div className="">
      <h1>TenPlus</h1>
      
      <Sidebar onClick={toggleSidebar} sidebarOpen={sidebarOpen}/>
      <div className='main-content'>
        <Navbar onClick={toggleSidebar} sidebarOpen={sidebarOpen}/>
        
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/Details' element={<Details/>}/>
        <Route exact path='/Order' element={<Order/>}/>
        <Route exact path='/Messages' element={<Messages/>}/>
        <Route exact path='/Ticket' element={<Ticket/>}/>
       00 <Route exact path='/Pending-reviews' element={<Pending/>}/>
        <Route exact path='/Address-book' element={<Address/>}/>
        <Route exact path='/Change-password' element={<Password/>}/>
        <Route exact path='/Logout' element={<Order/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
