import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const [token] = useToken(user);

  let errMsg;

  if (error || updatingError) {
    errMsg = (
      <p className="text-red-500 my-3">
        <small>{error?.message}</small>
      </p>
    );
  }

  if (error?.message.includes("network-request-failed")) {
    errMsg = (
      <p className="text-red-500 my-3">
        <small>🚫 Oops! Network Problem!</small>
      </p>
    );
  }

  if (error?.message.includes("email-already-in-use")) {
    errMsg = (
      <p className="text-red-500 my-3">
        <small>🚫 Email already Exist.</small>
      </p>
    );
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/appoinment");
    toast.success("Email verification sent. please check email.");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data?.name });

    // navigate("/appoinment");
  };

  return (
    <section>
      <div className="container ">
        <div className="flex min-h-screen items-center justify-center">
          <div className="card lg:w-5/12 bg-base-100 shadow-xl border">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl text-center mb-5">Sign Up</h2>
                {/* single input field  */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name?.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* single input field  */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Provide a valid email.",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email?.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email?.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* single input field  */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 charecters or longer.",
                      },
                      pattern: {
                        value: /(?=.*[!@#$%^&*])/,
                        message: "Use atleast one special charecter.",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* single input field  */}
                <div className="form-control w-full mt-5">
                  <input
                    type="submit"
                    value="SIGNUP"
                    className="btn btn-accent w-full text-xl font-light"
                  />
                </div>
                {errMsg}
                {/* txt content  */}
                <p className="text-center mt-5">
                  Already have an account?{" "}
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </p>

                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider">OR</div>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
