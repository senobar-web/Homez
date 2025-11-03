import BlogItem from '../../module/Blog/BlogItem';
import type {Blogs} from '../../module/Blog/Blog.type';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import {useQuery} from '@tanstack/react-query';
import ApiRequest from '../../module/Api_url/ApiRequest';
import AOSInit from '../../module/aos/aos';
export default function Blog() {
  const {data: response} = useQuery({
    queryKey: ['blogs-items'],
    queryFn: () => ApiRequest<Blogs[]>('/blogs-items'),
  });
  const blogsItems = response?.data;
  return (
    <>
      <AOSInit />
      <section className="my-9 py-14 ">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-[#181A20] text-4xl font-bold">وبلاگ ما</h3>
            <p className="text-[#717171] text-sm/12"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است</p>
          </div>
          <div className="flex justify-between mt-8 " data-aos="fade-up" data-aos-delay="100">
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
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {blogsItems?.map((item) => (
                <SwiperSlide key={item.id}>
                  <BlogItem {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
