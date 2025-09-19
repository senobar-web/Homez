import Title from "../../module/Title/Title";
import LowestHouse from "../../module/LowestHouse/LowestHouse";
import { titlesItem } from "../../../../data";
import type { CheapestHousesItem } from "./CheapestHouses.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ApiRequest from "../../module/Api_url/ApiRequest";

export default function CheapestHouses() {
  const [cheapestItems, setCheapestItems] = useState<CheapestHousesItem[]>([]);
   useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<CheapestHousesItem[]>(
        "/CheapestHousesItems"
      );
      setCheapestItems(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <section className="bg-gray-100 my-9 py-14">
        <div className="container">
          <div>
            <Title {...titlesItem[2]} />
          </div>
          <div className="flex justify-evenly mt-8">
            <Swiper
              className="mySwiper h-auto "
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {cheapestItems.map((item) => (
                <SwiperSlide>
                  <LowestHouse key={item.id} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
