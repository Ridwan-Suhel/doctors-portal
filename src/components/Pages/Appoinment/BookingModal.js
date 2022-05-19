import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name, _id);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user?.email,
      patientName: user?.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://stormy-plateau-22778.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Appoinment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appoinment on ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary mb-8">
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              value={format(date, "PP") || ""}
              disabled
              readOnly
              className="input input-bordered w-full"
            />

            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              readOnly
              className="input input-bordered w-full"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              readOnly
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-black-500 w-full uppercase"
            />
          </form>
          {/* <div className="modal-action">
            <label for="booking-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
