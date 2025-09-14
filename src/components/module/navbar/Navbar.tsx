import type { JSX } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="flex gap-2 items-center justify-start ">
        <div className="py-3 px-5 rounded-4xl hover:bg-gray-900 flex justify-center items-center text-white cursor-pointer ">
          <Link to="/" className="text-sm font-bold  ">
            صفحه اصلی
          </Link>
        </div>
        <div className="py-3 px-5 rounded-4xl hover:bg-gray-900  flex justify-center items-center text-white cursor-pointer">
          <h3 className=" text-sm font-bold "> فهرست ها </h3>
        </div>
        <div className="py-3 px-5 rounded-4xl hover:bg-gray-900  flex justify-center text-white items-center cursor-pointer">
          <h3 className=" text-sm font-bold "> اعضا</h3>
        </div>
        <div className="py-3 px-5 rounded-4xl hover:bg-gray-900  flex justify-center items-center text-white cursor-pointer">
          <h3 className=" text-sm font-bold "> وبلاگ</h3>
        </div>
        <div className="relative group py-2 px-8 rounded-4xl  hover:bg-gray-900  flex justify-center items-center text-white cursor-pointer ">
          <h3 className="text-white text-sm font-bold "> صفحات</h3>
          <IoMdArrowDropdown className="w-5 h-5" />
          <ul className="opacity-0 invisible bg-white group-hover:opacity-100 group-hover:visible rounded-xl text-black w-[250px] absolute overflow-hidden top-12 shadow-2xl z-[9999] transition-all  ">
            <li className="hover:bg-red-50 px-4 py-2 text-gray-700">
              <Link to="/contact">تماس با ما</Link>
            </li>
            <li className="hover:bg-red-50 px-4 py-2 text-gray-700">
              <Link to="/about"> درباره ما</Link>
            </li>
            <li className="hover:bg-red-50 px-4 py-2 text-gray-700">
              <Link to="/non-existent-path"> 404</Link>
            </li>
            <li className="hover:bg-red-50 px-4 py-2  text-gray-700">
              <Link to="/login"> ورود / ثبت نام</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
