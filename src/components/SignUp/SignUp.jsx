import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  // const [createdUserEmail, setCreatedUserEmail] = useState("");
  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData)
        if (imgData.success) {
          setSignUPError("");
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              toast.success("Sign up Successful")
              const userInfo = {
                displayName: data.name,
                photoURL: imgData.data.url,
              };
              updateUserProfile(userInfo)
                .then(() => {
                  saveUser(data.name, data.email, data.role);
                  navigate("/");

                })
                .catch((err) => console.log(err));
            })
            .catch((error) => {
              setSignUPError(error.message);
            });
        }
      });

  };

  //handle google sign in
  const handleGoogleSignIn = () => {
    console.log("google sign in");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        saveUser(user?.displayName, user?.email, "Seller");
        toast.success("Sign In Successfully");
      })
      .catch((err) => {
        const errorMessage = err.message;
        setSignUPError(errorMessage);
        console.log(err);
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
      <DynamicBanner title="Sign Up Page" />
      <div className="py-12 bg-[#F3F3FE]">
        <div className="container">
          <div
            className="max-w-[460px] bg-[#fff] w-full mx-auto p-7"
            style={{
              boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
            }}
          >
            <h2 className="text-4xl mb-7 font-medium text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.name?.message}</p>
                )}
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
                {signUpError.email && (
                  <p className="text-red-600">{signUpError.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is required",
                  })}
                  className="input input-bordered w-full"
                />

                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
                {signUpError.email && (
                  <p className="text-red-600">{signUpError.email?.message}</p>
                )}
              </div>

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
                </select>

                <small className="text-danger">
                  {errors?.role && errors.role.message}
                </small>
              </div>

              <div className="form-control w-full mb-4">
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
                    pattern: {
                      // value: /[a-zA-Z0-9]/,
                      message: "Password must be Strong",
                    },
                  })}
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <input
                className="primary-btn w-full bg-[#df030]"
                value="Sign Up"
                type="submit"
              />
            </form>
            <div>
              <p className="text-[12px] mt-[10px] text-center text-[#000000]">
                Already have an account?{" "}
                <Link to="/signin" className="font-bold text-[#df0303]">
                  Please Sign In
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

export default SignUp;
