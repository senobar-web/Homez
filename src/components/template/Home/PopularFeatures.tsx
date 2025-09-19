import { useState } from "react";
import LowestHouse from "../../module/LowestHouse/LowestHouse";
import { GoArrowUpLeft } from "react-icons/go";
import StatusBtn from "./StatusBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import type { CheapestHousesItem } from "./CheapestHouses.type";
import ApiRequest from "../../module/Api_url/ApiRequest";
export default function PopularFeatures() {
  const [data, setData] = useState<CheapestHousesItem[]>([]);
  const [statuses, setStatuses] = useState<CheapestHousesItem[]>([]);
  const [filteredData, setFilteredData] = useState<CheapestHousesItem[]>([]);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<CheapestHousesItem[]>(
        "/popularFeaturesItems"
      );
      const result = response.data;
      setData(result);
      setFilteredData(result);
      const uniqueCategories: string[] = [
        ...new Set(result.map((item) => item.status)),
      ];
      setStatuses(uniqueCategories as unknown as CheapestHousesItem[]);
    };
    fetchPosts();
  }, []);

  const filterItem = (status: string) => {
    let newFilteredItems = data.filter(
      (item: CheapestHousesItem) => item.status === status
    );
    setFilteredData(newFilteredItems);
  };

  return (
    <section className="bg-gray-main my-9 py-14">
      <div className="container" data-aos="fade-up">
        <div>
          <div className="flex flex-col md:flex-row justify-start md:items-center md:justify-between mb-10">
            <div>
              <h3 className="text-white text-2xl font-bold">
                ویژگی های محبوب را کشف کنید
              </h3>
              <p className="text-[#717171] text-sm/12">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است
              </p>
            </div>
            <div className="flex items-end gap-3 ">
              <StatusBtn statuses={statuses} filterItem={filterItem} />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {filteredData.map((item: CheapestHousesItem) => (
              <SwiperSlide>
                <LowestHouse key={item.id} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href=""
            className="flex items-center gap-2 py-4 px-8 bg-red rounded-xl text-white hover:bg-red-dark transition duration-75 ease-in"
          >
            مشاهده همه ویژگی ها
            <GoArrowUpLeft className=" w-6 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
