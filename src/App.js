import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);

const openSidebar = () =>{
  setSidebarOpen(true);
}
const closeSidebar = () =>{
  setSidebarOpen(false);
}
  return (
    <div className="">
      <h1>TenPlus</h1>
      <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <div className='main-content'>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      </div>
    </div>
  );
}

export default App;
