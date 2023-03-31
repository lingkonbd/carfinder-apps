import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "../pages/CheckoutForm";
import Loading from "./Loading";

const stripePromise = loadStripe('pk_test_51M7ACTBGySu5nPfMzvvSHaeMiVFx23W5hlYcB3ssv88O9scwf7JpNG0nf6qlfjZVllfZWuUquYThgoak5xN2GFxS00ktutsMk7');
const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  const { productName, resalePrice, buyerName, buyerEmail } = booking;
  if (navigation.state === "loading") {
    return <Loading />
  }
  return (
    <div>
      <div className="emgy-service max-w-[820px]">

        <>
          <div
            id="cheque-book"
            className="cheque-book bg-white"
            style={{ boxShadow: "rgba(87, 100, 126, 0.21) 0px 4px 4px;" }}
          >
            <div
              style={{
                // background: "rgb(1,12,58)",
                background:
                  // "linear-gradient(90deg, rgba(1,12,58,1) 0%, rgba(223,3,3,0.39859390688372087) 83%)",
                  "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)",
              }}
              className="cheque-head py-2 px-4 flex items-center justify-between"
            >
              <div className="cheque-logo flex items-center">
                {/* <img src={chequeLogo} alt="" srcset="" /> */}
                <span className="font-bold text-[32px] ml-1 text-[#fff]">
                  CAR <span className=" text-[#DF0303]">Finder</span>
                </span>
              </div>
              <div className="cheque-number ">
                <p className="text-white">
                  Product Id:
                  {booking?._id}
                </p>
              </div>
            </div>
          </div>
        </>
        <div className="px-[1rem]">
          <h2 className=" text-[#010c3a] mb-8 text-3xl font-bold">
            Payment For <strong>{productName}</strong>
          </h2>
          <h2 className="text-xl font-bold">
            Please Pay: <span className="text-[#010c3a]"> <strong>$ {resalePrice}</strong> for your new <strong>{productName}</strong> </span>
          </h2>
          <h2 className="text-xl font-bold">
            Location: <span className="text-[#010c3a]">$ {booking?.location}</span>
          </h2>
          <h2 className="my-3 text-2xl font-bold">Buyer Details: </h2>
          <h2 className="text-xl font-bold">
            Name: <span className="text-[#010c3a]"> {booking?.buyerName}</span>
          </h2>
          <h2 className="text-xl font-bold">
            Email: <span className="text-[#010c3a]"> {booking?.buyerEmail}</span>
          </h2>

          <div className="w-96 my-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm
                booking={booking}
              />
            </Elements>
          </div>
        </div>

      </div>




    </div>
  );
};

export default Payment;
