import React, { useEffect } from "react";

const DocDeleteModal = ({ docForDelete, setDoctorDelete, refetch }) => {
  const handleDocDelete = (id) => {
    console.log(id);

    if (id) {
      fetch(`http://localhost:5000/deleteDoctor/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setDoctorDelete(null);
            refetch();
          }
          console.log(data);
        });
    }
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="doc-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">WANNING!</h3>
          <p className="py-4">You wanna delete {docForDelete.name}?</p>
          <div className="modal-action mt-2">
            <label
              onClick={() => setDoctorDelete(null)}
              htmlFor="doc-delete-modal"
              className="btn btn-sm btn-secondary text-white"
            >
              CANCEL
            </label>
            <label
              onClick={() => handleDocDelete(docForDelete._id)}
              htmlFor="doc-delete-modal"
              className="btn btn-sm"
            >
              CONFIRMED
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocDeleteModal;
