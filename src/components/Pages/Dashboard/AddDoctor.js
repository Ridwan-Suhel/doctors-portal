import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="">
      <h2>Add a new doctor.</h2>
      <div className="flex items-center justify-center">
        <div className="card lg:w-5/12 bg-base-100 shadow-xl border">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl text-center mb-5">Add Doctor</h2>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
