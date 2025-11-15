import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import {useEffect, useState} from 'react';
import ShowFedback from './ShowFedback';
import {toast} from 'react-toastify';
import {useFormMutation} from '../../../hooks/useForm';

interface newComment {
  name: string;
  email: string;
  viewpoint: string;
  rating: number;
  rememberMe: boolean;
}
export default function Comments() {
  const [rating, setRating] = useState<number>(0);
  const {register, handleSubmit, watch, setValue, reset, errors, mutation} = useFormMutation<newComment>({
    endpoint: '/comments',
    successMessage: 'نظر شما با موفقیت ارسال شد!',
    defaultValues: {
      name: '',
      email: '',
      viewpoint: '',
      rating: 0,
      rememberMe: false,
    },
  });
  const onSubmit = (data: newComment) => {
    if (rating === 0) {
      toast.warn('لطفاً امتیاز دهید ⭐');
      return;
    }
    const payload = {
      ...data,
      rating,
      createdAt: new Date().toISOString(),
    };
    mutation.mutate(payload);
    if (data.rememberMe) {
      localStorage.setItem('User_name', data.name);
      localStorage.setItem('User_email', data.email);
    } else {
      localStorage.removeItem('User_name');
      localStorage.removeItem('User_email');
    }
    reset({...watch(), viewpoint: ''});
  };
  useEffect(() => {
    const savedName = localStorage.getItem('User_name');
    const savedEmail = localStorage.getItem('User_email');
    if (savedName && savedEmail) {
      setValue('name', savedName);
      setValue('email', savedEmail);
      setValue('rememberMe', true);
    }
  }, [setValue]);

  return (
    <>
      <ShowFedback />
      <div className="shadow-xs px-6 py-8  mt-14 bg-white rounded-2xl">
        <div>
          <h3 className="font-bold mb-5">یک نقد و بررسی اضافه کنید</h3>
          <div className="mb-7 flex items-center ">
            <p className="ml-4"> امتیاز:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onClick={() => setRating(star)} className="text-2xl">
                {star <= rating ? '⭐' : '☆'}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-full rounded-lg  ">
              <div className=" space-y-4 ">
                <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#181A20] ">
                        نام
                      </label>
                      <input
                        type="text"
                        id="email"
                        className=" border focus:outline-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        placeholder=""
                        {...register('name', {required: 'نام الزامی است'})}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#181A20]">
                        ایمیل
                      </label>
                      <input
                        type="email"
                        id="email"
                        className=" border border-gray-300 text-[#181A20] text-sm rounded-lg  block w-full p-2.5 focus:outline-0"
                        placeholder=""
                        {...register('email', {
                          required: 'ایمیل الزامی است',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'ایمیل معتبر نیست',
                          },
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                  </div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#181A20] ">
                    نقد و بررسی
                  </label>
                  <textarea
                    id="message"
                    {...register('viewpoint', {
                      required: 'متن نقد و بررسی الزامی است',
                      minLength: {value: 10, message: 'حداقل ۱۰ کاراکتر بنویسید'},
                    })}
                    className="block p-2.5 w-full text-sm text-[#181A20]  rounded-lg border border-gray-300 focus:outline-0"
                  ></textarea>
                  {errors.viewpoint && <p className="text-red-500 text-sm">{errors.viewpoint.message}</p>}
                  <div className="flex items-start gap-2">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" className="w-4 h-4  " {...register('rememberMe')} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-[#181A20] ">
                        ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={mutation.isPending}
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
