import AOSInit from '../aos/aos';
import {useFormMutation} from '../../../hooks/useForm';

interface ContactData {
  firstname: string;
  email: string;
  lastName: string;
  body: string;
}
export default function Form() {
  const {register, handleSubmit, errors, onSubmit, mutation} = useFormMutation<ContactData>({
    endpoint: '/contact-form',
    successMessage: 'درخواست ارسال شد',
    defaultValues: {
      firstname: '',
      lastName: '',
      email: '',
      body: '',
    },
  });

  return (
    <>
      <AOSInit />
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register('firstname', {
              required: 'نام الزامی است',
              minLength: {value: 2, message: 'نام باید حداقل ۲ حرف باشد'},
            })}
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 "
          />
          {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', {
              required: 'نام خانوادگی الزامی است',
              minLength: {value: 2, message: 'نام خانوادگی باید حداقل ۲ حرف باشد'},
            })}
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 "
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
            ایمیل
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'ایمیل الزامی است',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'ایمیل معتبر نیست',
              },
            })}
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
            پیام
          </label>
          <textarea
            id="message"
            {...register('body', {
              required: 'متن پیام الزامی است',
              minLength: {value: 10, message: 'پیام باید حداقل ۱۰ حرف باشد'},
            })}
            className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 h-[150px] "
          />
          {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>}
        </div>
        <button
          type="submit"
          className="text-white bg-red hover:bg-white border border-red cursor-pointer py-4 hover:text-red  font-medium rounded-lg text-sm px-5  text-center w-full transition-all  duration-200 ease-in  "
        >
          {mutation.isPending ? 'در حال ارسال...' : 'ارسال'}
        </button>
      </form>
    </>
  );
}
