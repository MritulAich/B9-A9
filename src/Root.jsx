import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Slider from "./components/header/Slider";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Slider></Slider>
        </div>
    );
};

export default Root;