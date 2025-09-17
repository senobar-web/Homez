import { MdPayments } from "react-icons/md";
import AboutCounter from "../../module/AboutCounter/AboutCounter";
import Breadcrumb from "../../module/Breadcrumb/Breadcrumb";

export default function IndexAbout() {
  return (
    <div>
      <section className="mb-10">
        <div className="breadcrumb_about">
          <div className="container">
            <h1 className=" mb-3 mt-0 mt-lg-5 text-gray-main font-bold text-2xl">
              درباره ما
            </h1>
            <Breadcrumb />
          </div>
        </div>
      </section>
      <section className="mb-6 lg:mb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 text-black">
            <div className="text-gray-main font-bold text-lg lg:text-3xl">
              <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
            </div>
            <div className="text-gray-light">
              <p className="mb-3 lg:mb-8 ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که و مجله در ستون و سطرآنچنان که لازم است
              </p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 text-black space-y-10 mt-20">
                <div className="pl-3">
                  <div className="mb-5 size-16 bg-gray-100 group hover:bg-black flex items-center justify-center rounded-full transition  duration-300 ease-in-out ">
                    <MdPayments className="size-7  group-hover:text-white transition duration-300 ease-in-out " />
                  </div>
                  <h3 className="text-gray-main font-bold text-xl mb-5">
                    ویلای مدرن
                  </h3>
                  <p className="text-gray-main text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                </div>
                <div className="px-3">
                  <div className="mb-5 size-16 bg-gray-100 group hover:bg-black flex items-center justify-center rounded-full transition duration-300 ease-in-out ">
                    <MdPayments className="size-7  group-hover:text-white transition  duration-300 ease-in-out " />
                  </div>
                  <h3 className="text-gray-main font-bold text-xl mb-5">
                    ویلای مدرن
                  </h3>
                  <p className="text-gray-main text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-6 lg:mb-10">
        <div className="container ">
          <div className="flex justify-center">
            <img src="/img/banner..webp" alt="" loading="lazy" />
          </div>
          <div className="text-gray-main md:mx-35 lg:px-12 mt-14 flex justify-between ">
            <div className="flex flex-col items-center ">
              <div className="flex items-center space-x-1.5">
                <AboutCounter count={4} />
                <span className="font-bold text-lg lg:text-3xl">میلیون</span>
              </div>
              <p className="mt-4 text-sm">برنده جایزه</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex  items-center space-x-1.5">
                <AboutCounter count={18} />
                <span className="font-bold text-lg lg:text-3xl">هزار</span>
              </div>
              <p className="mt-4 text-sm"> املاک آماده است</p>
            </div>
            <div className="flex flex-col items-center  ">
              <div className="flex items-center space-x-1.5">
                <AboutCounter count={23} />
                <span className="font-bold text-lg lg:text-3xl">میلیون</span>
              </div>
              <p className="mt-4 text-sm"> مشتری خوشحال</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
