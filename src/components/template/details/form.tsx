import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import {Controller} from 'react-hook-form';
import {useFormMutation} from '../../../hooks/useForm';
import type {DateObject} from 'react-multi-date-picker';

interface TourRequestData {
  username: string;
  email: string;
  phone: string;
  message: string;
  selectedTime: string;
  value: Date;
}
export default function Form() {
  const {register, handleSubmit, control, errors, mutation} = useFormMutation<TourRequestData>({
    endpoint: '/tour-request-form',
    successMessage: 'درخواست با موفقیت ارسال شد',
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      message: '',
      selectedTime: '',
      value: new Date(),
    },
  });

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (const minute of [0, 30]) {
        const time = new Date();
        time.setHours(hour, minute, 0);
        options.push(time.toTimeString().slice(0, 5));
      }
    }
    return options;
  };
  const onSubmit = (data: TourRequestData) => {
    mutation.mutate(data);
  };
  return (
    <>
      <div className="mt-6 shadow-xs px-5 py-5 rounded-2xl bg-white">
        <h3 className="mb-5">تماس با ما</h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className=" w-full mb-5">
            <input
              type="email"
              id="floating_email"
              className="block rounded-sm py-2.5 px-2 focus:outline-0 w-full text-sm text-gray-900 bg-transparent  border-1 border-gray-300 "
              placeholder=" ایمیل"
              {...register('email', {
                required: 'ایمیل الزامی است',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'ایمیل معتبر نیست',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className=" w-full mb-5">
            <select
              {...register('selectedTime', {required: 'لطفاً زمان را انتخاب کنید'})}
              className="rounded-sm grid border  border-gray-300 w-full gap-1.5 mt-5 overflow-y-scroll py-2.5"
            >
              <option value="">انتخاب زمان </option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.selectedTime && <p className="text-red-500 text-sm mt-1">{errors.selectedTime.message}</p>}
          </div>
          <Controller
            name="value"
            control={control}
            rules={{required: 'تاریخ الزامی است'}}
            render={({field: {onChange, value}}) => (
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                value={value}
                onChange={(val: DateObject | null) => onChange(val?.toDate())}
                placeholder="تاریخ"
                style={{
                  width: '100%',
                  padding: '20px 8px',
                }}
                containerStyle={{width: '100%'}}
              />
            )}
          />
          {errors.value && <p className="text-red-500 text-sm mt-1">{errors.value.message}</p>}
          <div className=" w-full mb-5 mt-5">
            <input
              type="text"
              id="floating_first_name"
              className="block py-2.5 px-2 rounded-sm focus:outline-0  w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none  peer"
              placeholder="نام "
              {...register('username', {
                required: 'نام الزامی است',
                minLength: {value: 2, message: 'نام باید حداقل ۲ حرف باشد'},
              })}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div className="w-full mb-5 ">
            <input
              type="tel"
              id="floating_phone"
              placeholder="تلفن"
              className="block py-2.5 px-2 rounded-sm focus:outline-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300"
              {...register('phone', {
                required: 'شماره تلفن الزامی است',
                pattern: {value: /^[0-9]{10,11}$/, message: 'شماره معتبر نیست'},
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className="text-black w-full mb-5">
            <textarea
              className="w-full rounded-sm  focus:outline-0 px-2 border-1 border-gray-300 "
              placeholder="پیام"
              {...register('message', {
                required: 'متن پیام الزامی است',
                minLength: {value: 10, message: 'پیام باید حداقل ۱۰ حرف باشد'},
              })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="text-white bg-red hover:bg-white border border-red cursor-pointer py-4 hover:text-red  font-medium rounded-lg text-sm px-5  text-center w-full transition-all  duration-200 ease-in  "
          >
            {mutation.isPending ? 'در حال ارسال...' : 'درخواست تور را ارسال کنید'}
          </button>
        </form>
      </div>
    </>
  );
}
