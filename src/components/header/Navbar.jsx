import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    <li><NavLink to='/userProfile'>User Profile</NavLink></li>
    <li><NavLink to='/community'>Community</NavLink></li>
  </>

  const handleLogOut=()=>{
    logOut()
    .then(res=>{console.log(res.user)})
    .catch(err=>{console.log(err)})
  }


  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="font-bold lg:text-3xl md:text-2xl text-xl">Imperial Villas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end lg:flex lg:flex-row md:flex-row flex-col">
        {
          user && <span>{user.email}</span>
        }
        <button className="btn m-4" onClick={handleLogOut}>Log Out</button>
        <Link to='/login' className="btn">Login</Link>
      </div>
    </div>
  )
};

export default Navbar;