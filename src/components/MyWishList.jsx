import React from "react";

const MyWishList = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-[#010c3a] mb-4 text-4xl font-bold">
          My Wish List
        </h2>
        <h2 className="text-center text-[#010c3a] my-4 text-2xl font-bold">
          Coming Soon (Optional Task)
        </h2>
        <div>
          <h2 className=" text-[#010c3a] my-8 text-2xl font-bold">
            User Account:
          </h2>
          <p className="text-xl">Email: seller@gmail.com</p>
          <p className="text-xl">Password: seller@gmail.com</p>
          <p className="text-xl">Email: buyer@gmail.com</p>
          <p className="text-xl">Password: buyer@gmail.com</p>
          <p className="text-xl">Email: admin@gmail.com</p>
          <p className="text-xl">Password: admin@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyWishList;
