import Title from "../../module/Title/Title";
import { titlesItem } from "../../../../data";
import ApartmentItem from "../../module/ApartmentItems/ApartmentItem";
import { ApartmentItems } from "../../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";

export default function TypesOfApartments() {
  return (
    <>
      <section className="my-7">
        <div className="container">
          <Title {...titlesItem[0]} />
          <div className="flex items-center justify-between mt-9 ">
            <Swiper
              className="mySwiper "
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay,Pagination]}
              loop={true}
            >
              {ApartmentItems.map((item) => (
                <SwiperSlide >
                  <ApartmentItem key={item.id} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
