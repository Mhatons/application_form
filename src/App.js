import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/nav';
import Footer from './components/layout/footer';
import Sidebar from './components/layout/sidebar';

function App() {
  return (
    <div className="App">
      <div className="border-b fixed top-0 w-full bg-white z-10">
        <Nav />
      </div>
      <div className="pt-[4.8em] sm:flex block ">
        <div className='sm:w-[35%] w-full'>
          <Sidebar />
        </div>
        <div className='sm:w-[60%] sm:pb-0 pb-16 w-full'>
          <Outlet />
        </div>
      </div>
      <div className="fixed border-t sm:block hidden bottom-0 w-full bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;
