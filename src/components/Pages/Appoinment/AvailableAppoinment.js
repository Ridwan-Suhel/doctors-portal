import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppoinment = ({ date, setDate }) => {
  const [services, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-center text-xl text-secondary mb-10">
        Appoinment available on {format(date || new Date(), "PP")}
        {/* this is wrong format use top line code instead  --> wrong double click gaybul hawa  > {format(date, "PP")} */}
      </p>
      <div className="appoinment-card-wrapper">
        <div className="grid grid-cols-3 gap-5">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))}
        </div>
        {treatment && (
          <BookingModal
            setTreatment={setTreatment}
            date={date}
            treatment={treatment}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppoinment;
