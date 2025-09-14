import { featureItem } from "../../../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
export default function CityHouses() {
  const [options, setOptions] = useState(featureItem);
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  return (
    <>
      <section className="mb-30">
        <div className="container">
          <div className="text-black grid grid-cols-1 lg:grid-cols-2">
            <div className="flex  items-end">
              <div>
                <div className="mb-6 lg:mb-10 ">
                  <h3 className="font-bold text-3xl mb-2.5" data-aos="fade-up">
                    خانه رویایی خود را پیدا کنید!
                  </h3>
                  <p data-aos="fade-up">
                    لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت است
                  </p>
                </div>
                <div className="mb-6 font-bold space-y-6" data-aos="fade-up">
                  {options.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <p> {item.title} </p>
                    </div>
                  ))}
                </div>
                <button
                  className="border-2 mt-5 border-black rounded-lg px-8 bg-black text-white font-bold cursor-pointer py-3.5"
                  data-aos="fade-up"
                >
                  بیشتر بخوانید
                </button>
              </div>
            </div>
            <div className="hidden  lg:grid grid-cols-2 relative ">
              <div className="flex items-end" data-aos="zoom-in">
                <img src="/img/h1.webp" alt="" />
              </div>
              <div data-aos="zoom-in">
                <img src="/img/h2.webp" alt="" />
              </div>
              <div
                className="absolute -bottom-30 z-30 left-55 "
                data-aos="zoom-in"
              >
                <img src="/img/ezgif.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
