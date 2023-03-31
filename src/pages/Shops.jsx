import React, { useEffect, useRef, useState } from "react";
import { ImBullhorn } from "react-icons/im";
import { useLocation } from "react-router-dom";
import SingleShopItems from "../components/Home/SingleShopItems";
import Loading from "../components/Loading";
import DynamicBanner from "../components/Shared/DynamicBanner";
const Shops = () => {
  // const { count, products } = useLoaderData();
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  useEffect(() => {
    fetch(
      `https://car-showroom-server.vercel.app/products?page=${page}&size=${size}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, search, size]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  // const {
  //   data: { products, count } = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://car-showroom-server.vercel.app/products`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   <div className="flex justify-center items-center">
  //     <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
  //   </div>;
  // }

  return (
    <div>
      {pathname.includes("shops") && <DynamicBanner title="Shops" />}
      <div className="shops-products py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-7 text-center title__before">
            <span className="bg-white px-6">
              <ImBullhorn className="mr-3 inline-block text-primary"></ImBullhorn>
              All Products
            </span>
          </h2>
          <div className="pagination mt-8 text-end">
            <div className="btn-group shadow-lg">
              {[...Array(pages).keys()].map((number) => (
                <button
                  onClick={() => setPage(number)}
                  className={page === number ? "selected  btn" : "btn"}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <div className="btn-group ml-2 shadow-lg">
              <select
                onChange={(event) => setSize(event.target.value)}
                className="select"
              >
                <option value="5">5</option>
                <option value="10" selected>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <>
            {products.length ? (
              <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                <>
                  {products?.map((product) => (
                    <SingleShopItems product={product} />
                  ))}
                </>
              </div>
            ) : (
              <Loading />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Shops;
