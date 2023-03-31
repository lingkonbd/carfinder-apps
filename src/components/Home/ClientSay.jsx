import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
const ClientSay = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div class="max-w-5xl mx-auto text-center my-8">
          <h1 class="text-3xl py-2  font-bold text-center">
            <span class="text-[#010C3A]">WHY CLIENTS LOVE US</span>
          </h1>
          <p>
            Hundreds of clients are thrilled by the service that we deliver and
            are happy to tell us. Read about what some have said about us here.
          </p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="slider-item max-w-lg border">
              <p className="py-6">
                Auto Showroom Theme is a clean and modern design which is useful
                for Car Dealer, Auto Dealer, Automotive WordPress website and
                any other automotive dealership business, who sell, buy or lease
                vehicles via website.
              </p>
              <div className="text-center">
                {/* <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="author">
              </div>
            </div> */}
                <p>Steven Smith</p>
                <p>Web Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item max-w-lg border">
              <p className="py-6">
                Auto Showroom Theme is a clean and modern design which is useful
                for Car Dealer, Auto Dealer, Automotive WordPress website and
                any other automotive dealership business, who sell, buy or lease
                vehicles via website.
              </p>
              <div className="text-center">
                {/* <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="author">
              </div>
            </div> */}
                <p>Steven Smith</p>
                <p>Web Designer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSay;
