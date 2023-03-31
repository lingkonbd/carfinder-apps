import React, { useContext } from "react";
import PrivateRoute from "../../Routes/PrivateRoute";
import { AuthContext } from "../../contexts/AuthProvider";

const BookModal = ({ booking, bookingData, closeModal }) => {
  const { user } = useContext(AuthContext);
  const { _id, email, number, title, resalePrice, sellerName } = bookingData;

  return (
    <div>
      {user?.email ? (
        <div>
          <input type="checkbox" id="book-now" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form onSubmit={booking}>
                <div className=" flex  font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Product ID: </span>
                  </label>
                  <input
                    disabled
                    name="productId"
                    defaultValue={_id}
                    type="text"
                  />
                </div>
                <div className="  font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Seller Name: </span>
                  </label>
                  <input
                    disabled
                    className="input input-bordered w-full"
                    name="sellerName"
                    defaultValue={sellerName}
                    type="text"
                  />
                </div>
                <div className="  font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Seller Email: </span>
                  </label>
                  <input
                    disabled
                    name="sellerEmail"
                    className="input input-bordered w-full"
                    defaultValue={email}
                    type="text"
                  />
                </div>
                <div className=" font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Seller phone number: </span>
                  </label>
                  <input
                    disabled
                    name="sellerNumber"
                    className="input input-bordered w-full"
                    defaultValue={number}
                    type="text"
                  />
                </div>
                <div className="   font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Your Name: </span>
                  </label>
                  <input
                    disabled
                    name="buyerName"
                    className="input input-bordered w-full"
                    defaultValue={user?.displayName}
                    type="text"
                  />
                </div>
                <div className="  mt-4 font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Your Email: </span>
                  </label>
                  <input
                    disabled
                    name="buyerEmail"
                    className="input input-bordered w-full"
                    defaultValue={user?.email}
                    type="text"
                  />
                </div>
                <div className="  mt-4 font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Product Name: </span>
                  </label>
                  <input
                    disabled
                    className="input input-bordered w-full"
                    name="title"
                    defaultValue={title}
                    type="text"
                  />
                </div>
                <div className="  mt-4 font-bold text-lg">
                  <label className="label">
                    <span className="label-text">price: </span>
                  </label>
                  <input
                    disabled
                    name="resalePrice"
                    defaultValue={resalePrice}
                    className="input input-bordered w-full"
                    type="text"
                  />
                </div>

                <div className="  mt-4 font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Your Phone Number: </span>
                  </label>
                  <input
                    required
                    name="buyerMobile"
                    className="input input-bordered w-full"
                    type="phone"
                  />
                </div>
                <div className="  mt-4 font-bold text-lg">
                  <label className="label">
                    <span className="label-text">Meeting Location: </span>
                  </label>
                  <input
                    required
                    name="meetingLocation"
                    className="input input-bordered w-full"
                    type="text"
                  />
                </div>
                <div className="modal-action flex justify-start">

                  <label onClick={closeModal} className="btn btn-outline btn-error w-auto rounded">
                    Cancel
                  </label>
                  <button type="submit" className=" btn btn-active btn-secondary w-auto rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <PrivateRoute></PrivateRoute>
        </>
      )}
    </div>
  );
};

export default BookModal;
