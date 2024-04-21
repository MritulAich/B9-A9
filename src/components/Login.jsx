import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col gap-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
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


        <div> Sign in with <button className="text-blue-700">Google</button>
        </div>
        Or
        <div>
            Continue with <button className="text-blue-700">Facebook</button>
        </div>
        <h2>New here? Please <Link to='/register' className="font-bold">Register</Link></h2>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;