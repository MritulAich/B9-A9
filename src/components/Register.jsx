import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    if(password.length < 6){
      alert('Password must contain minimum 6 characters')
    }
    else if(!/[A-Z]/.test(password)){
      alert('Password must contain at least one uppercase letter')
    }
    else if(!/[a-z]/.test(password)){
      alert('Password must contain at least one lowercase letter');
    }


    createUser(email, password)
      .then(res => { console.log(res.user) })
      .catch(err => { console.log(err) })
  }


  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Registration</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name :</span>
                  </label>
                  <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email :</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="file" placeholder="User photo" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password :</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                </div>


                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign In</button>
                </div>


                <h2>Have an account? Go to <Link to='/login' className="font-bold">Login</Link></h2>
              </form>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

export default Register;