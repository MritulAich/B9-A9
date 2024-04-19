import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Slider from "./components/header/Slider";

const Root = () => {
    return (
        <div className="lg:mx-28 md:mx-14 mx-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Slider></Slider>
        </div>
    );
};

export default Root;