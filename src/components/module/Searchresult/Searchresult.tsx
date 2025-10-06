import React, {useContext, useState} from 'react';
import {ContextItems} from '../Context/ItemsContext';

export default function Searchresult() {
  const contextData = useContext(ContextItems);
  const [searchValue, setSearchValue] = useState(' ');
  const [filterData, setFilterData] = useState(contextData.allRealEstate);
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    const filterEstate = contextData.allRealEstate.filter((item) => {
      item.title.includes(searchValue) || item.city.includes(searchValue) || item.category.includes(searchValue);
    });
    setFilterData(filterEstate);
  };
  return (
    <>
      <input
        type="text"
        className="text-gray-700 "
        // required
        placeholder="جستجو بر اساس آدرس،استان، شهر، نام ملک"
        value={searchValue}
        onChange={handelInputChange}
      />
      {searchValue.length === 0 ? null : (
        <ul className="absolute z-50 shadow-lg  shadow-3xl w-140 rounded-xl overflow-y-auto top-18 h-[240px] bg-white">
          {filterData.length > 0 ? (
            <>
              {filterData.map((item, index) => (
                <li key={index}>
                  <div className="w-full">
                    <div className="flex items-center gap-x-8  border-b border-b-gray-200 group px-3.5 py-5 ">
                      <img src={item.img} alt="image" className="size-20" />
                      <div className="flex justify-between w-full ">
                        <div className="flex flex-col">
                          <h2 className=" text-black hover:underline text-[14px] cursor-pointer">{item.title}</h2>
                          <p className="text-black   ">{item.price} تومان </p>
                          <div className="flex gap-3.5 text-gray-400 text-[13px]">
                            <p>{item.room} اتاق خواب</p>
                            <p>{item.bathroom} حمام</p>
                            <p>{item.meterage} متر مربع</p>
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
              <span className="font-IRANSans-Light text-lg text-gray-700 ">محصولی یافت نشد</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
