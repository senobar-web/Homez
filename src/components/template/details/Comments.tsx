import React from 'react';
import {FaStar} from 'react-icons/fa';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import {useEffect, useState} from 'react';
import ShowFedback from './ShowFedback';
import ApiRequest from '../../module/Api_url/ApiRequest';

export default function Comments() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [viewpoint, setViewpoint] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('User_name', name);
      localStorage.setItem('User_email', email);
    } else {
      localStorage.removeItem('User_name');
      localStorage.removeItem('User_email');
    }
    const newComment = {
      name,
      email,
      viewpoint,
      rating,
      rememberMe,
    };
    const response = await ApiRequest('/comments', 'POST', newComment);
    if (response.status === 201) {
      setViewpoint('');
      alert(' پیام ارسال شد');
    }
  };
  useEffect(() => {
    const savedUsername = localStorage.getItem('User_name');
    const savedEmail = localStorage.getItem('User_email');
    if (savedEmail && savedUsername) {
      setName(savedUsername);
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <>
      <ShowFedback />
      <div className="shadow-xs px-6 py-8  mt-14 bg-white rounded-2xl">
        <div>
          <h3 className="font-bold mb-5">یک نقد و بررسی اضافه کنید</h3>
          <div className="mb-7 flex items-center ">
            <p className="ml-4"> امتیاز:</p>
            {[...Array(5)].map((i) => {
              const ratingValue = i + 1;
              return (
                <label key={ratingValue}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="hidden"
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="cursor-pointer  transition  duration-300 ease-in-out w-5 h-5"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  />
                </label>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-full rounded-lg  ">
              <div className=" space-y-4 ">
                <form className="space-y-4 " onSubmit={handelSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#181A20] ">
                        نام
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className=" border focus:outline-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        placeholder=""
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#181A20]">
                        ایمیل
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className=" border border-gray-300 text-[#181A20] text-sm rounded-lg  block w-full p-2.5 focus:outline-0"
                        placeholder=""
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#181A20] ">
                    نقد و بررسی
                  </label>
                  <textarea
                    id="message"
                    value={viewpoint}
                    onChange={(e) => setViewpoint(e.target.value)}
                    className="block p-2.5 w-full text-sm text-[#181A20]  rounded-lg border border-gray-300 focus:outline-0"
                  ></textarea>
                  <div className="flex items-start gap-2">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" className="w-4 h-4  " required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-[#181A20] ">
                        ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" text-[#181A20] hover:text-white hover:bg-black cursor-pointer transition-all duration-200 ease-in border-1 border-[#181A20] hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    ارسال نظر
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
