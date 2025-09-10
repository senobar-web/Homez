import ReadMoreText from "../../module/Readmore/ReadMore";
import Comments from "./Comments";
import Form from "./form";

export default function AdditionalDetails() {
  const longText =
    " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله  در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید است";
  return (
    <>
      <div className="flex flex-col  md:flex-row gap-12 w-full justify-between">
        <div className="w-full">
          <div className="shadow-xs  px-5 py-7 rounded-2xl text-[#182A20] bg-white">
            <h3 className="font-bold mb-5">بررسی اجمالی</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال است
            </p>
            <ReadMoreText text={longText} maxLength={200} />
          </div>
          <Comments />
        </div>
        <div className="w-full md:w-[650px]  ">
          <div className="shadow-xs px-5 py-4 rounded-2xl bg-white">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-20 h-20 rounded-full"
                src="/img/m14-.webp"
                alt=""
              />
              <div className="font-medium text-[#182A20] ">
                <div className="text-2xl">حامد خشای </div>
                <div className="text-sm ">(+98)021-555-888</div>
              </div>
            </div>
            <button className="bg-red py-4 px-5 w-full rounded-xl text-white font-bold">
              مشاهده پروفایل
            </button>
          </div>
          <Form />
          <div className="shadow-xs mt-6 text-[#181A20] p-5 rounded-2xl bg-white">
            <h3 className="mb-5 font-bold text-xl">ارسال پیام به حامد خشای</h3>
            <a href="javascript:void(0)" className="hover:underline">
              لطفا برای ارسال پیام خصوصی وارد شوید
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
