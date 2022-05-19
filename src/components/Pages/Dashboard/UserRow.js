import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://stormy-plateau-22778.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Succesfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
