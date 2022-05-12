import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

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

  if (user) {
    navigate("/");
  }

  return (
    <section>
      <div className="container ">
        <div className="flex min-h-screen items-center justify-center">
          <div class="card w-5/12 bg-base-100 shadow-xl border">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 class="text-2xl text-center mb-5">Login</h2>
                {/* single input field  */}
                <div class="form-control w-full">
                  <label class="label">
                    <span class="">Email</span>
                  </label>
                  <input
                    class="input input-bordered w-full"
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
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email?.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email?.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* single input field  */}
                <div class="form-control w-full">
                  <label class="label">
                    <span class="">Password</span>
                  </label>
                  <input
                    class="input input-bordered w-full"
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
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password?.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* single input field  */}
                <div class="form-control w-full mt-5">
                  <input
                    type="submit"
                    value="LOGIN"
                    class="btn btn-accent w-full text-xl font-light"
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

                <div class="flex flex-col w-full border-opacity-50">
                  <div class="divider">OR</div>
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
