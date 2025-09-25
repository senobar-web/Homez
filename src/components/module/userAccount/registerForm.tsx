import {useForm} from 'react-hook-form';
import {useState} from 'react';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import type {RegisterFormInput} from './RegisterForm.type';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const {
    register,
    formState: {errors},
  } = useForm<RegisterFormInput>();
  return (
    <>
      <form className="max-w-full mx-auto p-5 ">
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-black ">
            نام کاربری
          </label>
          <input
            type="text"
            {...register('username', {required: 'نام کاربری را وارد نمایید'})}
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black  block w-full px-2.5 py-4 "
          />
          {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">
            آدرس ایمیل
          </label>
          <input
            type="email"
            {...register('email', {
              required: ' آدرس ایمیل را وارد نمایید',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'فرمت ایمیل درست نیست',
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black  block w-full  px-2.5 py-4"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black ">
            رمز عبور
          </label>
          <input
            type="password"
            {...register('password', {
              required: ' رمز عبور  را وارد نمایید',
              minLength: {
                value: 6,
                message: 'رمز  عبور حداقل باید ۶ کاراکتر داشته باشد',
              },
            })}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black block w-full  px-2.5 py-4"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black ">
            رمز عبور را دوباره وارد کنید
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: ' رمز عبور  را وارد نمایید',
              minLength: {
                value: 6,
                message: 'رمز  عبور حداقل باید ۶ کاراکتر داشته باشد',
              },
            })}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:border-black block w-full  px-2.5 py-4"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="mx-auto">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">
            نقش ها
          </label>
          <select
            id="countries"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  px-2.5 py-4  "
          >
            <option defaultValue={`نقش را انتخاب کنید`}>نقش را انتخاب کنید</option>
            <option value="US">کاربر</option>
            <option value="CA">نماینده</option>
            <option value="FR">آژانس ملک</option>
          </select>
        </div>
        <div className="w-full mb-6 mt-10">
          <button
            type="submit"
            className="cursor-pointer flex items-center justify-center transition  duration-300 ease-in-out  text-white bg-red hover:bg-white hover:text-red border-1  border-red text-lg w-full font-medium rounded-lg  px-5 py-2.5 text-center "
          >
            ثبت نام
            <NorthWestIcon />
          </button>
        </div>
      </form>
    </>
  );
}
