import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "./Loading";
import SingleProduct from "./SingleProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: { products, count } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://car-showroom-server.vercel.app/products?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  //delete product
  const handleDelete = (product) => {
    fetch(`https://car-showroom-server.vercel.app/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete product");
        }
      });
  };

  const addAdvertise = (product) => {
    //save product to the database for advertises
    fetch(`https://car-showroom-server.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added advertise");
      });
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-center mb-4 text-4xl font-bold">My Products</h2>
      <h2 className="text-center my-4 text-xl font-bold">
        If you are showing product then you must be added product{" "}
      </h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-6 mt-12">
        {products?.map((product) => (
          <SingleProduct
            key={product._id}
            product={product}
            handleDelete={handleDelete}
            addAdvertise={addAdvertise}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
