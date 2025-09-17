import Footer from "../../module/Footer/Footer";
import TopHeader from "../../module/TopHeader/TopHeader";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <TopHeader />
      <div className="container my-24">
        <div className="flex flex-col md:flex-row  justify-between items-center gap-x-3 gap-y-14 ">
          <div>
            <img src="/img/error.jpg" alt="error" loading="lazy" />
          </div>
          <div>
            <img src="/img/icon-error.png" alt="" loading="lazy" />
            <div className="text-black mb-10 mt-10">
              <h2 className="font-bold text-4xl my-10 ">
                متاسفانه صفحه مورد نظر شما پیدا نشد
              </h2>
              <p>
                لطفا یک لینک صحیح که در وبسایت موجود باشد را جستجو کنید تا صفحه
                مورد نظر را پیدا کنید
              </p>
            </div>
            <Link
              to="/"
              className="bg-black rounded-lg  py-3 px-10 text-white hover:bg-red cursor-pointer transition-all duration-100 ease-in"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
