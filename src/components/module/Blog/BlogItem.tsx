import type { Blogs } from "./Blog.type";

export default function BlogItem({ img, title, des, month, day }: Blogs) {
  return (
    <>
      <div className=" bg-white rounded-lg hover:-translate-y-3  transition duration-300 ease-in-out ">
        <a href="javascript:void(0)">
          <img className="rounded-t-lg" src={img} alt="" loading="lazy" />
        </a>
        <div className="p-5 relative">
          <a href="javascript:void(0)">
            <h5 className="mb-2 text-[13px]  tracking-tight text-gray-light hover:text-gray-main">
              {title}
            </h5>
          </a>
          <a
            href="javascript:void(0)"
            className="mb-3 text-gray-main text-lg font-bold hover:underline"
          >
            {des}
          </a>
          <div className="bg-white py-4 px-5 rounded-xl absolute bottom-15 left-4 shadow-sm">
            <div className="flex flex-col items-center justify-center">
              <span className="text-gray-main text-[13px]">{month}</span>
              <span className="text-gray-main font-bold text-xl">{day}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
