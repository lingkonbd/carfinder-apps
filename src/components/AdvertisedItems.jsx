import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
const AdvertisedItems = ({ advertise, setBookingData }) => {
  const {
    _id,
    location,
    date,
    category,
    resalePrice,
    verifyUser,
    sellerImg,
    sellerName,
    img,
  } = advertise;
  return (
    <>
      <div className="card card-compact rounded bg-base-100 shadow-xl">
        <figure className="max-h-[200px] w-full">
          <img
            className="max-h-[200px] w-full h-[200px]"
            src={img}
            alt="car!"
          />
        </figure>
        <div className="card-body justify-between">
          <div className="user__meta">
            <div className="avater">
              <img className="rounded-full" src={sellerImg} alt="User" />
              <div>
                <h6 className="font-light ml-3 text-secondary">{sellerName}</h6>
              </div>
            </div>
            <div className="post-date">
              <BiTimeFive className="inline-block text-primary text-lg mr-2"></BiTimeFive>
              <span className="text-secondary font-light">{date}</span>
            </div>
          </div>
          <h2 className="card-title text-secondary mt-2">{category}</h2>
          <div>
            <span className=" text-xs text-[#949494] uppercase">Price</span>
            <span className="text-lg text-primary block font-medium">
              USD $ {resalePrice}
            </span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <GoLocation className="inline-block text-primary text-lg"></GoLocation>
              <span className="text-secondary ml-2">{location}</span>
            </div>
            <div>
              <BsSpeedometer2 className="inline-block text-primary text-lg"></BsSpeedometer2>
              <span className="text-secondary ml-2">65,000 km</span>
            </div>
          </div>
          <div className="card-actions mt-3">
            <Link
              to={`/product-details/${_id}`}
              className="btn btn-outline btn-primary w-full rounded"
            >
              See More!
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default AdvertisedItems;
