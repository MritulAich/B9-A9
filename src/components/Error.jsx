import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center space-y-4 mt-24">
            <h2 className="font-semibold text-4xl text-purple-400">404</h2>
            <p className="font-medium text-2xl">OPPS! Page Not Found</p>
            <p className="text-xl">The page you are looking for does not exist</p>
            <Link to='/'><button className="text-xl text-orange-400">Return Home</button></Link>
        </div>
    );
};

export default Error;