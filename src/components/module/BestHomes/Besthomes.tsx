import {Link} from 'react-router-dom';
import {GoArrowUpRight} from 'react-icons/go';
import type {BestHouse} from './Besthouse.types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function Besthomes(houseElements: BestHouse) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <div className="py-9 shadow-lg rounded-lg w-full md:w-[30%]" data-aos="fade-up">
        <div className="flex flex-col items-center gap-y-3.5 px-8">
          <div>
            <img src={houseElements.img} alt="" className="w-20 h-20  lg:size-[150px]" loading="lazy" />
          </div>
          <div>
            <h3 className="text-black text-xl lg:text-2xl font-bold"> {houseElements.title}</h3>
          </div>
          <div>
            <p className="text-black text-[14px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="border-1 border-black rounded-xl px-4 py-2 lg:px-5 lg:py-2.5 hover:bg-black group mt-4">
            <Link
              to="/p-user"
              className="text-black flex items-center group-hover:text-gray-300 text-sm lg:text-lg/tight font-bold space-x-3.5 "
            >
              {houseElements.btn}
              <GoArrowUpRight className="size-6 lg:size-8 " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
