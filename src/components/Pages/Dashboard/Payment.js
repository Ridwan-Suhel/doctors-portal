import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L0rPMGUlBGybeRPaOihAR4XRTQ1eW3WNpgJ9hT6dOqSdXBR122t5aKdoPvUedhcBJKtMeMQkZv9Gm9E5wI2n2rA00UGMYmRE4"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://stormy-plateau-22778.herokuapp.com/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex items-center gap-6 justify-center flex-col ">
      {/* single card  */}
      <div class="card bg-base-100 shadow-xl border max-w-md mt-6  lg:w-[420px]">
        <div class="card-body">
          <h2 class="text-xl">
            Please Pay for <strong>{appoinment?.treatment}</strong>
          </h2>
          <p>
            Your Appoinment date is{" "}
            <strong className="text-gray-600">{appoinment?.date}</strong> at{" "}
            <strong>{appoinment?.slot}</strong>
          </p>
          <p className="text-xl">
            Your Charge is - <strong>${appoinment?.price}</strong>
          </p>
        </div>
      </div>
      {/* single card  */}
      <div class="card bg-base-100 shadow-xl border max-w-md lg:w-[420px]">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appoinment={appoinment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
