import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SearchBox from "../../module/searchBox/SearchBox";
import React from "react";

const ContentHeader: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto text-center py-24 lg:py-56 ">
        <div className="bg-transparent py-4.5 px-3.5">
          <div className="text-white font-bold ">
            <h5
              className="text-xs lg:text-lg text-center mb-3 "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              با وبسایت املاک هومز
            </h5>
            <h1
              className="text-2xl lg:text-6xl mb-6 lg:mb-10 text-center "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              خانه رویایی خود را پیدا کنید!
            </h1>
            <h3
              className="text-sm lg:text-xl text-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </h3>
          </div>
          <div className="mt-12 " data-aos="zoom-in" data-aos-delay="500">
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentHeader;
