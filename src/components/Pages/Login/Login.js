import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, ResetPassError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (user?.emailVerified) {
    toast.success("Email verification sent. please check email.");
  }

  let errMsg;

  if (error) {
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
  if (error?.message.includes("wrong-password")) {
    errMsg = (
      <p className="text-red-500 my-3">
        <small>🚫 Wrong Password.</small>
      </p>
    );
  }

  if (error?.message.includes("user-not-found")) {
    errMsg = (
      <p className="text-red-500 my-3">
        <small>🚫 Opps! User not found.</small>
      </p>
    );
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div className="container ">
        <div className="flex min-h-screen items-center justify-center">
          <div className="card lg:w-5/12 bg-base-100 shadow-xl border">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl text-center mb-5">Login</h2>
                {/* single input field  */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="">Email</span>
                  </label>
                  {/* {=============================================
                  ============================================================} */}
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    {...register("email", {
                      onChange: (e) => setEmail(e.target.value),
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
                {/* {====================Reset password btn =========================
                  ============================================================} */}
                <span
                  className="btn pl-0 btn-link text-accent"
                  onClick={async () => {
                    await sendPasswordResetEmail(email);
                    if (email === "") {
                      toast.error("Email is required.");
                    } else {
                      toast("Reset your password. please check email.");
                    }
                  }}
                >
                  Forget password?
                </span>
                {/* {=============================================
                  ============================================================} */}

                {/* single input field  */}
                <div className="form-control w-full mt-5">
                  <input
                    type="submit"
                    value="LOGIN"
                    className="btn btn-accent w-full text-xl font-light"
                  />
                </div>
                {errMsg}
                {/* txt content  */}
                <p className="text-center mt-5">
                  New to Doctors Portal?{" "}
                  <Link className="text-secondary" to="/signup">
                    Create new account
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

export default Login;
