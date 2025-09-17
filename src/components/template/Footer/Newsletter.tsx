import React from "react";
import { useState } from "react";
import axios from "axios";
import { Api_Url } from "../../module/Api_url/API";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: `${Api_Url}/newsletter`,
      data: { email },
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 201) {
      setEmail("");
      alert("  شد ارسال");
    }
  };
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
              className="text-white absolute end-2.5 bottom-2.5  hover:text-red-dark  font-medium  text-sm px-6 py-4    "
            >
              عضویت !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
