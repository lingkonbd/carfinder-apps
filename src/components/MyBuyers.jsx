import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "./Loading";
const MyBuyers = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://car-showroom-server.vercel.app/bookingsSeller/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });


  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1400px] mx-auto mb-12">
      <h2 className="text-center text-[#010c3a] mb-8 text-4xl font-bold">
        My Buyers
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Buyer</th>
                <th>Buyer Email</th>
                <th>Product</th>
                <th>Price</th>
                <th>Mobile</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((product, index) => (
                <tr key={product?._id}>
                  <th>{index + 1}</th>
                  <td>{product.buyerName}</td>
                  <td>{product?.buyerEmail}</td>
                  <td>{product?.productName}</td>
                  <td>$ {product?.resalePrice}</td>
                  <td>{product?.buyerMobile}</td>
                  <td>{product?.meetingLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBuyers;
