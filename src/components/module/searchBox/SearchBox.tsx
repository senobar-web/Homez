import React, { useContext, useState } from "react";
import { ContextItems } from "../../module/Context/ItemsContext";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const contextData = useContext(ContextItems);
  const [filterData, setFilterData] = useState(contextData.allRealEstate);
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    const filterEstate = contextData.allRealEstate.filter((item) => {
      item.title.includes(searchValue) ||
        item.city.includes(searchValue) ||
        item.category.includes(searchValue);
    });
    setFilterData(filterEstate);
  };
  return (
    <>
      <div className=" bg-white border-base-300 py-4 px-3.5 rounded-xl relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-5 ">
          <div className="relative input space-x-1 flex items-center bg-gray-100 w-full lg:w-[70%] rounded-sm overflow-hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <RiHomeLine className="w-6 h-6 text-black" />
            </div>
            <input
              type="text"
              className="text-gray-700 w-full ps-14 p-2.5 focus:outline-0  focus:bg-gray-200 "
              placeholder="جستجو بر اساس آدرس،استان، شهر، نام ملک"
              value={searchValue}
              onChange={handelInputChange}
            />
          </div>
          <div className="flex space-x-5 ">
            <div className=" cursor-pointer text-black flex items-center space-x-1.5 hover:text-red transition duration-300 ease-in-out ">
              <HiOutlineAdjustmentsHorizontal className="w-6 h-6" />
              <span>پیشرفته</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-red/80 flex items-center justify-center cursor-pointer hover:bg-red transition duration-300 ease-in-out">
              <CiSearch className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {searchValue.length === 0 ? null : (
        <ul className="absolute z-50 shadow-lg  w-140 rounded-xl overflow-y-auto top-22 h-[300px] bg-white">
          {filterData.length > 0 ? (
            <>
              {filterData.map((item, index) => (
                <li key={index}>
                  <div className="w-full">
                    <div className="flex items-center gap-x-8  border-b border-b-gray-200 group px-3.5 py-5 ">
                      <img
                        src={item?.img}
                        alt="image"
                        className="size-20"
                        loading="lazy"
                      />
                      <div className="flex justify-between w-full ">
                        <div className="flex flex-col">
                          <h2 className=" text-black hover:underline text-[14px] cursor-pointer">
                            {item?.title}
                          </h2>
                          <p className="text-black ">{item?.price} تومان </p>
                          <div className="flex gap-3.5 text-gray-400 text-[13px]">
                            <p>{item?.room} اتاق خواب</p>
                            <p>{item?.bathroom} حمام</p>
                            <p>{item?.meterage} متر مربع</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <li className="p-5 ">
              <span className="font-IRANSans-Light text-lg text-gray-700 ">
                ملکی یافت نشد
              </span>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
