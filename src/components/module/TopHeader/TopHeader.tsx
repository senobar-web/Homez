import Navbar from "../navbar/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import Login from "../Login/Login";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import DrawerLists from "../DrawerList/DrawerLists";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <>
      {/* Navbar */}
      <div className="hidden py-6  border-b-1 border-gray-800 lg:flex items-center justify-between px-10 bg-black ">
        <div className="flex items-center gap-3.5">
          <Link to={"/"}>
            <img src="../img/logo.svg" alt="logo" />
          </Link>
          <Navbar />
        </div>
        {/* Nav Left */}
        <div className="flex gap-6 items-center justify-end">
          <Login />
          <div>
            <button className="flex items-center justify-center text-white text-lg font-bold py-3 px-7 rounded-4xl border-1 border-white hover:bg-red hover:border-red transition  duration-300 ease-in-out cursor-pointer">
              افزودن ملک
              <NorthWestIcon className="h-10" />
            </button>
          </div>
          <DrawerLists />
        </div>
      </div>
      {/*Nav Mobile */}
      <div className="bg-white flex items-center justify-between lg:hidden py-3 px-5">
        <div>
          <RxHamburgerMenu className="w-6 h-6 text-black" />
        </div>
        <div>
          <img src="./img/logodark.svg" alt="logo" />
        </div>
        <Link to={`/login`}>
          <FaRegUserCircle className="w-6 h-6 text-black" />
        </Link>
      </div>
    </>
  );
}
