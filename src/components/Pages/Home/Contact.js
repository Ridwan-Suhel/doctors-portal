import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import Button from "../../Shared/Button/Button";
const Contact = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appoinment})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-2xl text-center uppercase">
          Contact us
        </h2>
        <h2 className="text-white text-4xl text-center ">
          Stay connected with us
        </h2>

        <div className="form-wrapper lg:w-2/4 mx-auto mt-16">
          <form action="">
            <input
              type="email"
              placeholder="Email Address"
              class="input input-bordered w-full  mb-5"
            />
            <input
              type="text"
              placeholder="Subject"
              class="input input-bordered w-full mb-5"
            />
            <textarea
              class="textarea textarea-bordered w-full mb-5 h-32"
              placeholder="Your Message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary mx-auto text-center flex text-white px-12"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
