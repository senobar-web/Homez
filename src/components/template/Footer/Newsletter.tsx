import {useFormMutation} from '../../../hooks/useForm';

interface FormInput {
  email: string;
}
export default function Newsletter() {
  const {register, handleSubmit, errors, mutation, onSubmit} = useFormMutation<FormInput>({
    endpoint: '/newsletter',
    successMessage: 'ایمیل با موفقیت ثبت شد!',
    defaultValues: {email: ''},
  });
  return (
    <div>
      <div>
        <h3>اخبار روز را دنبال کنید</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative ">
            <input
              type="email"
              id="search"
              className="mt-7 block w-full  p-6 ps-10 text-sm  text-white  rounded-lg bg-gray-800 "
              placeholder="ایمیل خود را بنویسید"
              {...register('email', {
                required: 'ایمیل الزامی است',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'ایمیل وارد شده معتبر نیست',
                },
              })}
            />
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`hover:cursor-pointer  text-white absolute end-2.5 bottom-2.5  focus:border-none hover:text-red-dark  font-medium  text-sm px-6 py-4 `}
            >
              {mutation.isPending ? 'در حال ارسال...' : 'عضویت!'}
            </button>
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
        </form>
      </div>
    </div>
  );
}
