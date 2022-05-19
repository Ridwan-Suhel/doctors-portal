import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://stormy-plateau-22778.herokuapp.com/service").then((res) =>
      res.json()
    )
  );

  const imageStorageKey = "ce950de04ec24100b4296e5837ff26c5";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // sending to database
          fetch("https://stormy-plateau-22778.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add a Doctor.");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h2>Add a new doctor.</h2>
      <div className="flex items-center justify-center">
        <div className="card lg:w-5/12 bg-base-100 shadow-xl border">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl text-center mb-5">Add Doctor</h2>
              {/* single input name field  */}
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
              {/* single input email field  */}
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
              {/* single input specialty field  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="">Specialty</span>
                </label>
                <select
                  type="text"
                  class="select select-bordered w-full"
                  {...register("specialty", {
                    required: {
                      value: true,
                      message: "Specialization is required",
                    },
                  })}
                >
                  {services?.map((service) => (
                    <option value={service.name} key={service._id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* single input image field  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="">Image</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full pt-1.5"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.image?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* single input field  */}
              <div className="form-control w-full mt-5">
                <input
                  type="submit"
                  value="Add Doctor"
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
