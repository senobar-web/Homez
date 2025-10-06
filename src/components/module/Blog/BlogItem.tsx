import type {Blogs} from './Blog.type';

export default function BlogItem(blogItems: Blogs) {
  return (
    <>
      <div className=" bg-white rounded-lg hover:-translate-y-3  transition duration-300 ease-in-out ">
        <a href="javascript:void(0)">
          <img className="rounded-t-lg" src={blogItems.img} alt="" loading="lazy" />
        </a>
        <div className="p-5 relative">
          <a href="javascript:void(0)">
            <h5 className="mb-2 text-[13px]  tracking-tight text-gray-light hover:text-gray-main">{blogItems.title}</h5>
          </a>
          <a href="javascript:void(0)" className="mb-3 text-gray-main text-lg font-bold hover:underline">
            {blogItems.des}
          </a>
          <div className="bg-white py-4 px-5 rounded-xl absolute bottom-15 left-4 shadow-sm">
            <div className="flex flex-col items-center justify-center">
              <span className="text-gray-main text-[13px]">{blogItems.month}</span>
              <span className="text-gray-main font-bold text-xl">{blogItems.day}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
