import { format } from "date-fns";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyAppoinment = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppoinments(data));
    }
  }, [user]);

  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <h2 className="">You Have {appoinments.length} appoinment</h2>

        <button class="btn btn-outline">{formattedDate}</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {appoinments.map((appoinment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{appoinment?.patientName}</td>
                <td>{appoinment?.date}</td>
                <td>{appoinment?.slot}</td>
                <td>{appoinment?.treatment}</td>
                <td>
                  {appoinment?.price && !appoinment?.paid && (
                    <Link
                      to={`/dashboard/payment/${appoinment._id}`}
                      className="btn btn-xs btn-success"
                    >
                      Pay now
                    </Link>
                  )}
                  {appoinment?.price && appoinment?.paid && (
                    <span className="btn btn-xs btn-success">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
