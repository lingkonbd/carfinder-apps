import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(`https://car-showroom-server.vercel.app/users`);
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

  const handleAdmin = (id) => {
    fetch(`https://car-showroom-server.vercel.app/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Added Admin");
      });
  };

  return (
    <div>
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#df0303]">All Users</span>
      </h1>
      <h1 className="text-xl my-8 font-bold text-center">
        <span>
          If you click (make admin) then show other route
        </span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((singleUser, index) => (
              <tr key={singleUser?._id}>
                <th>{index + 1}</th>
                <td>{singleUser?.name}</td>

                <td>{singleUser?.email}</td>
                <td>{singleUser?.role}</td>
                <td>
                  {singleUser?.role === "admin" ? (
                    <button
                      onClick={() => handleAdmin(singleUser._id)}
                      className="btn btn-error btn-xs"
                    >
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdmin(singleUser._id)}
                      className="btn btn-error btn-xs"
                    >
                      Make Admin
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
  );
};

export default AllUsers;
