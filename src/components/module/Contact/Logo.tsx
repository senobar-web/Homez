import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Logo() {
  return (
    <>
      <div className="container">
        <div className=" py-7 md:mt-66 lg:mt-0" data-aos="fade-up">
          <h3 className="text-gray-main text-xl text-center mb-14 font-bold">
            مورد اعتماد در ایران
          </h3>
          <div className="flex justify-evenly items-center">
            <Swiper
              className="mySwiper h-auto"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="w-[100px]">
                {/* <a href="" className="block"> */}
                <img src="/img/b1.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>

              <SwiperSlide className="w-[100px]">
                {/* <a href=""> */}
                <img src="/img/b2.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>
              <SwiperSlide className="w-[100px]">
                {/* <a href=""> */}
                <img src="/img/b3.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>
              <SwiperSlide className="w-[100px]">
                {/* <a href=""> */}
                <img src="/img/b4.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>
              <SwiperSlide className="w-[100px]">
                {/* <a href=""> */}
                <img src="/img/b5.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>
              <SwiperSlide className="w-[100px]">
                {/* <a href=""> */}
                <img src="/img/b6.jpg" alt="" className="w-[100px]" />
                {/* </a> */}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
