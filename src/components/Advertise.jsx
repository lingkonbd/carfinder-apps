import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ImBullhorn } from "react-icons/im";
import AdvertisedItems from "./AdvertisedItems";
import Loading from "./Loading";
import BookModal from "./ProductPaymentModal/BookModal";
const Advertise = () => {
  const [bookingData, setBookingData] = useState(null);
  const {
    data: advertises = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://car-showroom-server.vercel.app/advertises`
      );
      const data = await res.json();
      return data;
    },
  });

  const closeModal = () => {
    setBookingData(null);
  };
  const booking = (event) => {
    event.preventDefault();
    setBookingData(null);

    const form = event.target;
    const productName = form.title.value;
    const resalePrice = form.resalePrice.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const meetingLocation = form.meetingLocation.value;
    const buyerMobile = form.buyerMobile.value;
    const sellerNumber = form.sellerNumber.value;
    const productId = form.productId.value;

    const bookingProduct = {
      productName,
      resalePrice,
      sellerName,
      sellerEmail,
      buyerName,
      buyerEmail,
      meetingLocation,
      sellerNumber,
      buyerMobile,
      productId,
    };
    console.log(bookingProduct);

    fetch("https://car-showroom-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Successfully");
        } else {
          toast.error(data.message);
        }
      });

    //save product to the database for
    fetch(`https://car-showroom-server.vercel.app/products/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ booked: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  return (
    <>
      {advertises?.length > 0 ?
        <div className="advertisements-area md:py-16 py-12">
          <div className="container">
            {advertises?.length > 0 ? (
              <>
                <h2 className="text-4xl font-bold mb-7 text-center title__before">
                  <span className="bg-white px-6">
                    <ImBullhorn className="mr-3 inline-block text-primary"></ImBullhorn>
                    Advertisements
                  </span>
                </h2>
                <>
                  {advertises.length ? (
                    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                      {advertises.map((advertise) => (
                        <AdvertisedItems
                          key={advertise._id}
                          advertise={advertise}
                          setBookingData={setBookingData}
                        />
                      ))}
                    </div>
                  ) : (
                    <Loading />
                  )}
                </>
              </>
            ) : (
              " "
            )}
            <div>
              {/* MOdal content*/}
              {bookingData && (
                <BookModal
                  bookingData={bookingData}
                  closeModal={closeModal}
                  booking={booking}
                />
              )}
            </div>
          </div>
        </div>

        :
        (
          " "
        )
      }
    </>
  );
};

export default Advertise;
