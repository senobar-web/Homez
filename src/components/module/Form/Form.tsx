import React from 'react';
import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ApiRequest from '../Api_url/ApiRequest';

export default function Form() {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [body, setBody] = useState('');
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      firstname,
      lastName,
      email,
      body,
    };
    const response = await ApiRequest('/contact-form', 'POST', newPost);
    if (response.status === 201) {
      setFirstname('');
      setLastName('');
      setBody('');
      setEmail('');
      alert(' فرم ارسال شد');
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className=" w-full md:w-[450px] mt-10 lg:-mt-60 border bg-white border-gray-200 px-6 py-6 rounded-xl "
        data-aos="zoom-in"
      >
        <h3 className="text-black mb-8 font-bold">سوالی دارید؟! در تماس باشید</h3>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
            نام
          </label>
          <input
            type="text"
            id="username"
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 "
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastName"
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 "
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
            ایمیل
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
            پیام
          </label>
          <textarea
            id="message"
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 h-[150px] "
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red hover:bg-white border border-red cursor-pointer py-4 hover:text-red  font-medium rounded-lg text-sm px-5  text-center w-full transition-all  duration-200 ease-in  "
        >
          ارسال
        </button>
      </form>
    </>
  );
}
