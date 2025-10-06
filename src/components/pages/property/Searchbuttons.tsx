import {MdStarOutline} from 'react-icons/md';
import {HiOutlineAdjustmentsHorizontal} from 'react-icons/hi2';
import {BsSignTurnLeft} from 'react-icons/bs';
export default function SearchButtons() {
  return (
    <div>
      {' '}
      <div className="text-[#181A20] flex items-center space-x-3 my-6 group cursor-pointer ">
        <div className="w-10 h-10 flex items-center justify-center bg-[#F7F7F7] rounded-full group-hover:bg-gray-200 transition-all duration-300 ease-in">
          <HiOutlineAdjustmentsHorizontal className="w-5 h-5 " />
        </div>
        <p className="text-sm font-bold">امکانات بیشتر</p>
      </div>
      <button className="bg-red w-full py-3 rounded-xl hover:bg-red-500 cursor-pointer " type="submit">
        <div className="flex items-center space-x-2 justify-center ">
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="text-lg font-bold "> جستجو</span>
        </div>
      </button>
      <div className="flex text-[#181A20] items-center justify-between mt-5 font-bold gap-1.5 ">
        <div className="flex items-center space-x-1 underline hover:text-red transition duration-200 ease-in-out  cursor-pointer">
          <BsSignTurnLeft />
          <span>بازنشانی جستجو</span>
        </div>
        <div className="flex items-center space-x-1 underline hover:text-red transition duration-200 ease-in-out cursor-pointer">
          <MdStarOutline />
          <span>ذخیره جستجو</span>
        </div>
      </div>{' '}
    </div>
  );
}
