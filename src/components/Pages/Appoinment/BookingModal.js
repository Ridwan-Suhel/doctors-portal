import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name, _id);
    setTreatment(null);
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
