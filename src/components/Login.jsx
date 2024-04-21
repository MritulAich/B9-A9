import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";


const Login = () => {
  const notify = () => toast.error('Oops! Infos are not matching');

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
   .then(res=>{console.log(res.user)})
   .catch(err=>{console.log(err)})


  const { signIn } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
      .then(res => {
        console.log(res.user);
        toast('You have logged in successfully');
      }
      )
      .catch(err => {notify()})
  }

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <div className="hero min-h-screen ">
          <div className="hero-content flex-col gap-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Login now</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

                <h2>New here? Please <Link to='/register' className="font-bold">Register</Link></h2>
              </form>

              <div className="ml-6"> Sign in with <button onSubmit={signInWithPopup} className="text-blue-700">Google</button>
                <p>Or</p></div>
                
                <div className="ml-6 mb-5">
                  Continue with <button className="text-blue-700">Facebook</button>
                </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </HelmetProvider>
    </div>
  );
};

export default Login;