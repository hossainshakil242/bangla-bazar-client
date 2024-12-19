import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPovider";
import { useForm } from "react-hook-form";

const Login = () => {
    const {login} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        login(data.email,data.password)
        .then(result =>{
            console.log(result);
            alert('login success');
        })
        .catch(error=>{
            if(error.code === 'auth/invalid-email'){
                alert('invalid email')
            }
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6">You should must login buy any products.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register('email')}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password')}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>

            {/* Navigate login page */}
            <label className="label-text-alt label mx-auto">
              Have an account?
              <Link className="text-primary" to={"/signup"}>
                &nbsp;Sign In
              </Link>
            </label>
          </form>
            <div className="divider">Or</div>
            <button className="btn btn-accent">Connect with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
