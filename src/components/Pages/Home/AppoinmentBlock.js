import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import doctorSmall from "../../../assets/images/doctor-small.png";
import Button from "../../Shared/Button/Button";

const AppoinmentBlock = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appoinment})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="mt-10 lg:mt-[120px]"
    >
      <div className="container mx-auto px-4 py-10 lg:py-0">
        <div className="appoinment-wrapper flex justify-between items-center">
          <img
            src={doctorSmall}
            className="object-cover w-2/4 mt-[-100px] hidden lg:block"
            alt="img"
          />
          <div className="appoinment-content">
            <h3 className="text-primary">Appoinment</h3>
            <h1 className="text-3xl text-white my-5">
              Make an appointment Today
            </h1>
            <p className="text-white mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentBlock;
