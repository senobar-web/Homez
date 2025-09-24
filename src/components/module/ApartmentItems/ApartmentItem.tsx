import type {ApartmentTypes} from './Apartment.type';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function ApartmentItem(elements: ApartmentTypes) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <Link
        to={`/property-type/${elements.title}`}
        className="block p-7 bg-gray-100 hover:bg-gray-950 rounded-2xl  h-full group "
        data-aos="fade-up"
      >
        <div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:bg-[#ffffff14]">
            {elements.icon}
          </div>
          <div className="text-gray-950 mt-12 group-hover:text-gray-200">
            <h3 className="text-xl font-bold "> {elements.title}</h3>
            <p className="text-sm/9 ">{elements.count} ملک </p>
          </div>
        </div>
      </Link>
    </>
  );
}
