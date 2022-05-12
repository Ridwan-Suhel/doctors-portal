import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="container ">
        <div className="flex min-h-screen items-center justify-center">
          <div class="card w-5/12 bg-base-100 shadow-xl border">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 class="text-2xl text-center mb-5">Sign Up</h2>
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
                    value="SIGNUP"
                    class="btn btn-accent w-full text-xl font-light"
                  />
                </div>
                {/* txt content  */}
                <p className="text-center mt-5">
                  Already have an account?{" "}
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </p>

                <div class="flex flex-col w-full border-opacity-50">
                  <div class="divider">OR</div>
                </div>

                <SocialLogin></SocialLogin>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
