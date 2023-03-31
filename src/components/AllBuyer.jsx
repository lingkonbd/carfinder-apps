import axios from "axios";
import React, { useEffect, useState } from "react";

const AllBuyer = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    axios.get("https://car-showroom-server.vercel.app/allBuyer")
    .then((res) => {
      setBuyers(res.data);
    });
  }, []);


  return (
    <div>
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#df0303]">All Buyer</span>
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((singleUser, index) => (
                <tr key={singleUser?._id}>
                  <th>{index + 1}</th>
                  <td>{singleUser?.name}</td>

                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyer;
