import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPovider";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
            title: "Congratulation!",
            text: "You Create an Account!",
            icon: "success"
          });
          console.log(result);
      })
      .catch((error) => {
        if(error.code == 'auth/email-already-in-use'){
            Swal.fire({
                icon: "error",
                title: "Email Already used",
                text: "Please try with another email!",
              });
        }
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name Filed */}
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name")}
              />
            </div>

            {/* Email Filed */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* Password Filed */}
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password")}
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
