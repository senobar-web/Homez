import { useContext } from "react";
import { ContextItems } from "../../module/Context/ItemsContext";
import Slider from "@mui/material/Slider";
import SearchButtons from "./Searchbuttons";
import type { resSliderProps } from "./Sidebar.type";

export default function SidebarFilter({
  onFilterChange,
  priceRange,
  selectedCity,
  selectedRoom,
  selectedOptionCheck,
  selectedOption,
}: resSliderProps) {
  const { allRealEstate, checkedItems } = useContext(ContextItems);
  const data = allRealEstate.map((item) => item.category);
  const filtercheckbox = [...new Set(data)];
  const uniqueCities = [...new Set(allRealEstate.map((item) => item.citycenter)),];
  const uniqueRooms = [...new Set(allRealEstate.map((item) => item.room))];
  const handelRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ selectedRoom: event.target.value });
  };
  const handelCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ selectedCity: event.target.value });
  };
  const handelcheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let newCategories = [...selectedOptionCheck];
    if (checked) {
      newCategories.push(value);
    } else {
      newCategories = newCategories.filter((item) => item !== value);
    }
    onFilterChange({ selectedOptionCheck: newCategories });
  };
  const handelPrice = (e:Event) => {
    onFilterChange({ priceRange: e.target.value });
  };
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ selectedOption: e.target.value });
  };

  return (
    <>
      <div className=" p-5 ">
        {/* Status of Estate */}
        <div className="text-[#181A20]">
          <h3 className="mt-6 mb-3 font-bold">وضعیت ملک</h3>
          <div className="flex items-center mb-4">
            <input
              id="disabled-radio-1"
              type="radio"
              value="برای اجاره"
              checked={selectedOption === "برای اجاره"}
              onChange={handleOptionChange}
              name="disabled-radio"
              className="w-5 h-5"
            />
            <label
              htmlFor="disabled-radio-1"
              className="ms-2 text-sm font-medium "
            >
              برای اجاره
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="disabled-radio-2"
              type="radio"
              value="برای فروش"
              name="disabled-radio"
              className="w-5 h-5 "
              checked={selectedOption === "برای فروش"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="disabled-radio-2"
              className="ms-2 text-sm font-medium "
            >
              برای فروش
            </label>
          </div>
        </div>
        {/* Type of Estate */}
        <div className="text-[#181A20]">
          <h3 className="mt-6 mb-3 font-bold"> نوع ملک</h3>
          {filtercheckbox.map((category) => (
            <div className="flex items-center mb-4" key={category}>
              <input
                id="disabled-radio-1"
                type="checkbox"
                value={category}
                name="disabled-radio"
                className="w-4 h-4 "
                checked={checkedItems[category]}
                onChange={handelcheck}
              />
              <label
                htmlFor="disabled-radio-1"
                className="ms-2 text-sm font-medium "
              >
                {category}
              </label>
            </div>
          ))}
        </div>
        {/*  price  */}
        <div className="text-[#181A20] font-bold mt-10">
          <div>
            <h3>محدوده قیمت</h3>
            <Slider
              value={priceRange}
              onChange={handelPrice}
              valueLabelDisplay="auto"
              min={0}
              max={9800}
              color="success"
              step={50}
            />
            <div className="grid grid-cols-2 gap-7 mt-7">
              <span className="py-2.5 px-1.5 bg-gray-100 rounded-xl text-center ">
                {" "}
                تومان {priceRange[1]}
              </span>
              <span className="py-2.5 px-1.5 bg-gray-100 rounded-xl text-center ">
                {" "}
                تومان {priceRange[0]}
              </span>
            </div>
          </div>
        </div>
        {/* City */}
        <div className="text-black mt-10">
          <p className="mb-3 font-bold">موقعیت</p>
          <select
            id="city"
            className="bg-gray-100 py-2.5 rounded-lg w-full"
            onChange={handelCityChange}
            value={selectedCity}
          >
            <option value="">انتخاب بر اساس شهر</option>
            {uniqueCities.map((citycenter) => (
              <option key={citycenter} value={citycenter}>
                {" "}
                {citycenter}
              </option>
            ))}
          </select>
        </div>
        {/* Number of Rooms */}
        <div className="text-black mt-10">
          <p className="mb-3 font-bold">اتاق</p>
          <select
            className="bg-gray-100 py-2.5 rounded-lg w-full"
            onChange={handelRoomChange}
            value={selectedRoom}
          >
            <option value=""> اتاق : هر </option>
            {uniqueRooms.map((room) => (
              <option key={room} value={room}>
                {" "}
                {room}
              </option>
            ))}
          </select>
        </div>
        <SearchButtons />
      </div>
    </>
  );
}
