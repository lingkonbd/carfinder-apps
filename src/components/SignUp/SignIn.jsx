import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import signUpimg from "../../assets/img/lexus2.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserDetails, setLoginUserDetails] = useState("");

  // call location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //handle google sign in
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        saveUser(user?.displayName, user?.email, "Seller");
        toast.success("Sign In Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setLoginError(errorMessage);
      });
  };

  const handleLogin = (data) => {
    setLoginUserDetails("");
    fetch(`https://car-showroom-server.vercel.app/user/${data.email}`)
      .then((res) => res.json())
      .then((usr) => {
        if (usr.role === data.role) {
          signIn(data.email, data.password)
            .then((result) => {
              const user = result.user;
              toast.success("Sign in Successfully");
              navigate(from, { replace: true });
            })
            .then((error) => {
              console.log(error.message);
            });
        } else {
          setLoginUserDetails("Please select Right account role");
        }
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://car-showroom-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <DynamicBanner title="Sign In Page" />
      <div className="py-12 bg-[#F3F3FE] ">
        <div className="container mx-auto ">
          <div
            className="max-w-[460px] bg-[#fff] w-full mx-auto p-7"
            style={{
              boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
            }}
          >
            <h2 className="text-4xl mb-8 font-medium text-center">Sign In</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text">Your Role</span>
                </label>

                <select
                  {...register("role")}
                  className="input input-bordered w-full"
                >
                  <option defaultValue="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                  <option value="admin">Admin</option>
                </select>

                <small className="text-danger">
                  {errors?.role && errors.role.message}
                </small>
                <small className="text-danger">{loginUserDetails}</small>
              </div>
              <div className="form-control w-full mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
                {loginError.email && (
                  <p className="text-red-600">{loginError.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {" "}
                  <span className="label-text text-[10px] text-[#000]">
                    Forget Password?
                  </span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <input
                className="primary-btn w-full bg-[#df0303]"
                value="Login"
                type="submit"
              />
            </form>
            <div>

              <p className="text-[12px] mt-[10px] text-center text-[#000000]">
                New to Car Finder?{" "}
                <Link to="/signup" className="font-bold text-[#df0303]">
                  Create new Account
                </Link>
              </p>
              <div className="divider">OR</div>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="primary-btn w-full"
                >
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
