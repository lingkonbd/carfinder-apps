import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllSellers = () => {
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(`https://car-showroom-server.vercel.app/allSeller`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  const handleVerify = (id, email) => {
    console.log(id);
    fetch(`https://car-showroom-server.vercel.app/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verify: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
        }
      });

    fetch(`https://car-showroom-server.vercel.app/products?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verifyUser: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("User Verify");
      });
  };

  const handleDelete = (id) => {
    fetch(`https://car-showroom-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete User");
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#df0303]">All Sellers</span>
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
                <th>Verify</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((singleUser, index) => (
                <tr key={singleUser?._id}>
                  <th>{index + 1}</th>
                  <td>{singleUser?.name}</td>

                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role}</td>
                  <td>
                    {singleUser?.verify ? (
                      <button className="btn btn-success btn-xs">
                        Verified
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleVerify(singleUser._id, singleUser?.email)
                        }
                        className="btn btn-error btn-xs"
                      >
                        Verify
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(singleUser._id)}
                      className="btn btn-error btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
