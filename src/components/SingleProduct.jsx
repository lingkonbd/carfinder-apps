import React from "react";

const SingleProduct = ({ product, handleDelete, addAdvertise }) => {
  const { img, description, resalePrice, title, status, booked } = product;
  return (
    <div className="card card-compact rounded bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-[175px] w-full h-[175px]" src={img} alt="img" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <h2 className="card-title">Price: ${resalePrice}</h2>
        <p>{description}</p>

        <div className="card-actions">
          {booked ? (
            <>
              <button
                onClick={() => addAdvertise(product)}
                className="badge badge-outline bg-green-500"
              >
                Sold
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => addAdvertise(product)}
                className="badge badge-outline "
              >
                Advertise
              </button>
            </>
          )}

          <button
            onClick={() => handleDelete(product)}
            className="badge badge-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
