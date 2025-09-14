import { RiCopyrightLine } from "react-icons/ri";

export default function CopyRight() {
  return (
    <>
      <div className="flex flex-col gap-y-2 md:flex-row items-center md:relative mt-5">
        <div className="flex items-center space-x-2">
          <RiCopyrightLine />
          <p>تفرش تم – کلیه حقوق محفوظ است</p>
        </div>
        <div className=" md:absolute md:end-0 ">
          <ul className="flex gap-2">
            <li>
              <a href="">حریم خصوصی</a>
            </li>
            <span>.</span>
            <li>
              <a href=""> قوانین و مقررات</a>
            </li>
            <span>.</span>
            <li>
              <a href=""> نقشه سایت</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
