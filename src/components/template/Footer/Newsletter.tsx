import React from 'react';
import {useState, useEffect} from 'react';
import ApiRequest from '../../module/Api_url/ApiRequest';
import type {ApiResponse} from '../../module/Api_url/ApiRequest';
import {useMutation} from '@tanstack/react-query';

interface SubscribeResponse {
  email: string;
}
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const mutation = useMutation<ApiResponse<SubscribeResponse>, Error, string>({
    mutationFn: async (email: string) => {
      const newEmail = {email};
      const response = await ApiRequest('/newsletter', 'POST', newEmail);
      return response;
    },
  });

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(email);
  };
  useEffect(() => {
    if (mutation.isSuccess) {
      alert('ایمیل با موفقیت ارسال شد');
      setEmail('');
    }
    if (mutation.isError) {
      alert('Error sending: ' + (mutation.error as Error).message);
    }
  }, [mutation.isSuccess, mutation.isError]);

  return (
    <div>
      <div>
        <h3>اخبار روز را دنبال کنید</h3>
        <form onSubmit={handelSubmit}>
          <div className="relative ">
            <input
              type="email"
              id="search"
              className="mt-7 block w-full  p-6 ps-10 text-sm  text-white  rounded-lg bg-gray-800 "
              placeholder="ایمیل خود را بنویسید"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="hover:cursor-pointer text-white absolute end-2.5 bottom-2.5  hover:text-red-dark  font-medium  text-sm px-6 py-4    "
            >
              عضویت !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
