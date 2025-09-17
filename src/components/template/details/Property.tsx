import { TbPointFilled } from "react-icons/tb";
import { MdOutlineWatchLater, MdOutlineBed } from "react-icons/md";
import { FaShower } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { CheapestHousesItem } from "../Home/CheapestHouses.type";
import { shapeIcon } from "../../../../data";
import { Api_Url } from "../../module/Api_url/API";

export default function Property() {
  const [icon, setIcon] = useState(shapeIcon);
  const { propertyID } = useParams();
  const [popularItems, setPopularItems] = useState<CheapestHousesItem[]>([]);
  useEffect(() => {
    axios.get(`${Api_Url}/popularFeaturesItems`).then((res) => {
      setPopularItems(res.data);
    });
  }, []);
  let item = popularItems.find((property) => property.id == Number(propertyID));

  return (
    <>
      <div className="flex flex-col md:flex-row  md:items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mb-6">
            {item?.title}{" "}
          </h1>
          <div className="flex items-center space-x-0 md:space-x-3 text-sm">
            <p> {item?.city}</p>
            <div className="text-red font-bold flex items-center ">
              {" "}
              <TbPointFilled /> {item?.status}
            </div>
            <div className="flex items-center space-x-2">
              <MdOutlineWatchLater className="w-5 h-5" />
              <p>2 سال پیش</p>
            </div>
          </div>
          <div className="mt-5 mb-3 font-normal text-gray-700  flex  items-center  space-x-5 ">
            <div className="flex items-center space-x-2 text-gray-main">
              <MdOutlineBed className="w-4 h-4" />
              <span className="text-[13px]">{item?.room} اتاق خواب</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-main">
              <FaShower className="w-4 h-4" />
              <span className="text-[13px]">{item?.bathroom}حمام </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-main">
              <GiResize className="w-4 h-4" />
              <span className="text-[13px]">{item?.meterage} متر مربع </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-3 mb-7">
            {icon.map((item) => (
              <div
                key={item.id}
                className="w-10 h-10 bg-gray-50 rounded-lg border-1 border-gray-200 flex items-center justify-center hover:border-black transition-all duration-300 ease-in cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
          <p className="md:text-center font-bold text-2xl">
            {item?.price.toLocaleString()} تومان
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 gap-x-5 my-8">
        <div className="rounded-t-2xl sm:rounded-r-2xl sm:rounded-tl-none overflow-hidden ">
          <img
            src={item?.img}
            alt=""
            className="w-full h-full  hover:scale-105 hover:cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none overflow-hidden  ">
          <div className="overflow-hidden">
            <img
              src="/img/p6.webp"
              alt=""
              className="w-full h-full hover:scale-105 hover:cursor-pointer "
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/img/p6.webp"
              alt=""
              className="w-full h-full hover:scale-105 hover:cursor-pointer "
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/img/p6.webp"
              alt=""
              className="w-full h-full hover:scale-105 hover:cursor-pointer"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/img/p11.jpg"
              alt=""
              className="w-full h-full hover:scale-105 hover:cursor-pointer "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
