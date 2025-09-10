import NorthWestIcon from "@mui/icons-material/NorthWest";
import type { Titles as TitleType } from "./Titles.types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Title({ title, des, btn }: TitleType) {
   useEffect(() => {
      AOS.init({
        duration: 800, // Animation duration
        easing: "ease-in-out", // Animation easing
      });
    }, []);
  return (
    <>
      <div className="flex flex-col items-start justify-start md:flex-row  md:justify-between" data-aos="fade-up">
        <div>
          <h3 className="text-[#181A20] text-2xl font-bold">{title}</h3>
          <p className="text-[#717171] text-sm/12">{des}</p>
        </div>
        <div className="flex items-end ">
          <a
            href="javascript:void(0)"
            className=" flex items-center justify-center text-[#181A20] text-lg font-bold py-3 px-7   hover:text-red  transition  duration-300 ease-in-out cursor-pointer"
          >
            {btn}
            <NorthWestIcon className="h-10" />
          </a>
        </div>
      </div>
    </>
  );
}
