import { Outlet } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from "./components/Footer";

const Root = () => {
    return (
        <div>
            <div className='lg:mx-28 md:mx-14 mx-6'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;