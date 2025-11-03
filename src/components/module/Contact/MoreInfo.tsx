import {Link} from 'react-router-dom';
import {GoArrowUpRight} from 'react-icons/go';
import {FiPhone} from 'react-icons/fi';
import AOSInit from '../aos/aos';
export default function MoreInfo() {
  return (
    <>
      <AOSInit />
      <div className="bg-gray-100 mt-8 rounded-none lg:rounded-xl lg:mx-14  ">
        <div className="container ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between  ">
            <div data-aos="fade-up">
              <h3 className="text-[#181A20] text-lg lg:text-2xl font-bold">برای اطلاعات بیشتر باما تماس بگیرید</h3>
              <p className="text-[#717171] text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است</p>
            </div>
            <div className="flex flex-col md:flex-row  md:items-end gap-5 lg:h-[66px] mt-5 ">
              <Link
                to="/contact"
                className=" h-full flex items-center gap-2 justify-center text-[#181A20] border border-black rounded-2xl bg-white hover:bg-black hover:text-white text-lg font-bold py-3 px-7  transition  duration-300 ease-in-out cursor-pointer"
              >
                تماس با ما
                <GoArrowUpRight />
              </Link>
              <a
                href="javascript:void(0)"
                className="h-full flex items-center gap-2 justify-center text-white bg-black rounded-2xl hover:bg-red  text-lg font-bold py-3 px-7 transition  duration-300 ease-in-out cursor-pointer"
              >
                <FiPhone className="h-10 text-gray-100" />
                <span> ۰۲۱۵۸۵۱۹۲۳۰</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
