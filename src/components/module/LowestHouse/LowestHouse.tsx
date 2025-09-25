import {MdOutlineBed} from 'react-icons/md';
import {FaShower} from 'react-icons/fa6';
import {GiResize} from 'react-icons/gi';
import {TiFlashOutline} from 'react-icons/ti';
import type {CheapestHousesItem} from '../../template/Home/CheapestHouses.type';
import {Link} from 'react-router-dom';

export default function LowestHouse(cheapestItem: CheapestHousesItem) {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-sm ">
        <Link to={`/property/${cheapestItem.id}`} className="relative">
          <img className="rounded-t-lg" src={cheapestItem.img} alt="" loading="lazy" />
          <div className="px-3.5 py-2 bg-white rounded-lg absolute bottom-5 right-4">
            <h4 className="text-gray-main"> {cheapestItem.price} تومان</h4>
          </div>
          <div className="flex items-center gap-1 px-3.5 py-2 bg-red rounded-lg absolute top-5 right-4">
            <TiFlashOutline className="text-white w-4 h-4" />
            <h4 className=" text-white font-bold text-sm"> ویژه </h4>
          </div>
        </Link>
        <div className="p-5  ">
          <div className="border-b-1  border-b-gray-200">
            <Link to={`/property/${cheapestItem.id}`} className="hover:underline  decoration-black">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-main ">{cheapestItem.title}</h5>
            </Link>
            <Link to={`/property/${cheapestItem.id}`} className="hover:underline decoration-black ">
              <h5 className="mb-2 text-[13px]  tracking-tight text-gray-light ">{cheapestItem.city}</h5>
            </Link>
            <div className="mt-5 mb-3 font-normal text-gray-700  flex  items-center  space-x-5 ">
              <div className="flex items-center space-x-2 text-gray-main">
                <MdOutlineBed className="w-4 h-4" />
                <span className="text-[13px]">{cheapestItem.room} اتاق خواب</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-main">
                <FaShower className="w-4 h-4" />
                <span className="text-[13px]">{cheapestItem.bathroom}حمام </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-main">
                <GiResize className="w-4 h-4" />
                <span className="text-[13px]">{cheapestItem.meterage} متر مربع </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <Link to={`/property/${cheapestItem.id}`} className="hover:underline text-gray-main text-[13px]">
            {cheapestItem.status}
          </Link>
        </div>
      </div>
    </>
  );
}
