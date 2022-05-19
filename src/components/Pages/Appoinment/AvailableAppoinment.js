import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppoinment = ({ date, setDate }) => {
  // const [services, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://stormy-plateau-22778.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="flex mt-[-25px]">
        <button class="btn btn-square loading mx-auto"></button>
      </div>
    );
  }

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  // useEffect(() => {
  //   fetch(`https://stormy-plateau-22778.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, [formattedDate]);

  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-center text-xl text-secondary mb-10">
        Appoinment available on {format(date || new Date(), "PP")}
        {/* this is wrong format use top line code instead  --> wrong double click gaybul hawa  > {format(date, "PP")} */}
      </p>
      <div className="appoinment-card-wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map((service) => (
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
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppoinment;
