import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp Now!</h1>
          <p className="py-6">
            If you haven't Accout on BanglaBazar please Register Here.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            {/* Name Filed */}
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Email Filed */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Filed */}
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">SignUp</button>
            </div>

            {/* Navigate login page */}
            <label className="label label-text-alt mx-auto">
              Already have an accout ?{" "}
              <Link className="text-primary" to={"/login"}>
              &nbsp;Log In
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
