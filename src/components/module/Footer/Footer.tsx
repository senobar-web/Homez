import Application from '../../template/Footer/Application';
import CopyRight from '../../template/Footer/CopyRight';
import Newsletter from '../../template/Footer/Newsletter';
import City from '../../template/Footer/City';
import Access from '../../template/Footer/Access';
import PopularSearch from '../../template/Footer/PopularSearch';
import {ToastContainer} from 'react-toastify';
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-main py-6 text-white">
        <div className="container ">
          <div className="flex flex-col lg:flex-row border-b-1 border-b-gray-800 lg:gap-x-20 pb-9">
            {/* right footer */}
            <div className="w-full lg:w-[30%] py-6">
              <img src="/img/logo.svg" alt="" loading="lazy" />
              <Application />
            </div>
            {/* left footer */}
            <div className="w-full lg:w-[70%] px-5 py-6">
              <Newsletter />
              <div className="flex flex-col md:flex-row md:items-center  justify-between mt-9 ">
                <PopularSearch />
                <Access />
                <City />
              </div>
            </div>
          </div>
          <CopyRight />
        </div>
      </footer>
      <ToastContainer position="top-right" autoClose={3000} rtl />
    </>
  );
}
