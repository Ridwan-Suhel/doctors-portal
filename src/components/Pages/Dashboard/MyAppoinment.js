import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyAppoinment = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "PP");
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then((res) => res.json())
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
