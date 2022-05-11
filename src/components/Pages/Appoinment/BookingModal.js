import { format } from "date-fns";
import React, { useState } from "react";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary mb-8">
            Booking For: {name}
          </h3>
          <form action="" className="grid grid-cols-1 gap-4">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              readOnly
              class="input input-bordered w-full"
            />

            <select class="select select-bordered w-full">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-black-500 w-full uppercase"
            />
          </form>
          {/* <div class="modal-action">
            <label for="booking-modal" class="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
