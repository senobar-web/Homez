import Title from '../../module/Title/Title';
import LowestHouse from '../../module/LowestHouse/LowestHouse';
import {titlesItem} from '../../../../data';
import type {CheapestHousesItem} from './CheapestHouses.type';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';

export default function CheapestHouses() {
  const {data: response} = useQuery({
    queryKey: ['cheapest-houses'],
    queryFn: () => ApiRequest<CheapestHousesItem[]>('/cheapest-houses-items'),
  });
  const cheapestItems = response?.data;
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
              {cheapestItems?.map((item) => (
                <SwiperSlide key={item.id}>
                  <LowestHouse {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
