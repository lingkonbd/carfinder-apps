import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const DashbordRoot = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-[30px] bg-[#F1F5F9] flex flex-col">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="text-[#010c3a] font-semibold" to="/dashboard">
                My WishList
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/allBuyer"
                  >
                    All Buyers
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/allSeller"
                  >
                    All Sellers
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/reportedItem"
                  >
                    Reported Items
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/allUsers"
                  >
                    All Users
                  </Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/addProduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/myProducts"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#010c3a] font-semibold"
                    to="/dashboard/myBuyers"
                  >
                    My buyers
                  </Link>
                </li>
              </>
            )}
            {isBuyer && (
              <li>
                <Link
                  className="text-[#010c3a] font-semibold"
                  to="/dashboard/myOrders"
                >
                  My Orders
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordRoot;
