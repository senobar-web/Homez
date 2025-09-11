import { useForm } from "react-hook-form";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { useState } from "react";
import type { loginInput } from "./LoginInput.type";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm<loginInput>();
  return (
    <>
      <form className="w-full mx-auto p-5">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black "
          >
            نام کاربری یا آدرس ایمیل
          </label>
          <input
            type="text"
            {...register("username", { required: "نام کاربری را وارد نمایید" })}
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black  block w-full px-2.5 py-4 "
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black "
          >
            رمز عبور
          </label>
          <input
            type="password"
            {...register("password", {
              required: "رمز عبور  را وارد نمایید",
              minLength: {
                value: 6,
                message: "رمز  عبور حداقل باید ۶ کاراکتر داشته باشد",
              },
            })}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black block w-full px-2.5 py-4 "
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="flex flex-col mb-8  ">
          <div className="flex items-start  ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border bg-white  text-white rounded-sm "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-black "
            >
              مرا در سیستم نگه دارید
            </label>
          </div>
          <div className="text-black">
            <a href="">رمز عبور خود را فراموش کرده اید؟</a>
          </div>
        </div>
        <div className="w-full mb-6 mt-4">
          <button
            type="submit"
            className="cursor-pointer w-full  flex items-center justify-center transition  duration-300 ease-in-out  text-white bg-red hover:bg-white hover:text-red border-1  border-red text-lg  font-medium rounded-lg px-5 py-2.5  "
          >
            ورود
            <NorthWestIcon />
          </button>
        </div>
      </form>
    </>
  );
}
