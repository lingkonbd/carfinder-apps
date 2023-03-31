import React from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import DynamicBanner from "../Shared/DynamicBanner";

const CategoryProducts = () => {
  const products = useLoaderData();

  const handleReport = (id) => {
    fetch(`https://car-showroom-server.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ report: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added advertise");
      });
  };


  return (
    <>
      <DynamicBanner title="Category Products" />
      <div className="container mb-12">

        <>
          {products.length ? (
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
              {products.map((categoryProduct) => (
                <>
                  <div
                    key={categoryProduct._id}
                    className="card card-compact rounded bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="max-h-[200px] w-full h-[200px]"
                        src={categoryProduct.img}
                        alt={categoryProduct.title}
                      />
                    </figure>
                    <div className="card-body justify-between">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img src={categoryProduct?.sellerImg} alt="img" />
                            </div>
                            {categoryProduct.verifyUser && (
                              <BsCheckCircleFill className="text-green-500 text-xl " />
                            )}
                          </div>
                        </div>
                        <div>
                          <p>Seller Name: {categoryProduct.sellerName} </p>
                          <p>Email: {categoryProduct.email} </p>
                        </div>
                      </div>

                      <h2 className="card-title">
                        Name: {categoryProduct.title}
                      </h2>
                      <h2 className="card-title">
                        Category: {categoryProduct.category}
                      </h2>
                      <p>
                        Date: {categoryProduct.date} Time:{" "}
                        {categoryProduct.time}
                      </p>
                      <p>Date: {categoryProduct.location}</p>

                      <p>Original Price: {categoryProduct.originalPrice}</p>
                      <p>Resale Price: {categoryProduct.resalePrice}</p>
                      <p>Use: {categoryProduct.uses} year/month</p>

                      <div
                        className="card-actions "
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(2, 1fr)",
                        }}
                      >
                        <button
                          onClick={() => handleReport(categoryProduct._id)}
                          className="btn btn-outline btn-primary w-full rounded"
                        >
                          Report
                        </button>
                        <Link
                          to={`/product-details/${categoryProduct._id}`}
                          className="btn btn-outline btn-primary w-full rounded"
                        >
                          See More!
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div>
              <div class="works-doc py-10">
                <div class="container">
                  <div class="text-center border-4  border-[#010C3A] rounded-sm p-12 bg-[#df0303] text-white max-w-lg mx-auto">
                    <h2 class="phone-title text-xl text-white">
                      <Link to="/">Home</Link>
                      <span className="mx-2">{">"}</span>
                      <Link to="/shop" >shops</Link>
                    </h2>
                    <h2
                      href="/"
                      class="phone-number text-white text-4xl font-bold "
                    >
                      The product does not available
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>


      </div>
    </>
  );
};

export default CategoryProducts;
