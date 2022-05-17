import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;

  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${name} is Deleted.`);
          setDeletingDoctor(null);
          refetch();
          console.log(data);
        }
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-normal text-lg">
            Are you sure you want to{" "}
            <strong className="text-red-500">DELETE</strong> Doctor{" "}
            <strong>{name}</strong>
          </h3>
          <p className="py-4">
            After Deleting a doctor you are not able to restore the deleted
            doctor any information or data.
          </p>
          <div className="modal-action">
            <label for="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
            <button
              onClick={() => {
                handleDelete();
              }}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
