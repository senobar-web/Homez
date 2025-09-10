import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React, { useState } from "react";
import axios from "axios";
export default function Form() {
  const [value, setValue] = useState(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const changeHandler = (event) => {
    const date = new Date(event);
    setValue(date);
  };
  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/TourRequestForm",
      data: { username, email, phone, message, value, selectedTime },
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 201) {
      setEmail("");
      setUsername("");
      setPhone("");
      setMessage("");
      alert("sent request");
    }
  };
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute of [0, 30]) {
        const time = new Date();
        time.setHours(hour, minute, 0);
        options.push(time.toTimeString().slice(0, 5)); 
      }
    }
    return options;
  };
  return (
    <>
      <div className="mt-6 shadow-xs px-5 py-5 rounded-2xl bg-white">
        <h3 className="mb-5">تماس با ما</h3>
        <form className="w-full" onSubmit={handelSubmit}>
          <div className=" w-full mb-5">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block rounded-sm py-2.5 px-2 focus:outline-0 w-full text-sm text-gray-900 bg-transparent  border-1 border-gray-300 "
              placeholder=" ایمیل"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" w-full mb-5">
            <select
              onChange={handleTimeChange}
              value={selectedTime}
              className="rounded-sm grid border  border-gray-300 w-full gap-1.5 mt-5 overflow-y-scroll py-2.5"
            >
              <option value="">زمان</option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={value}
            onChange={changeHandler}
             placeholder="تاریخ" 
            style={{
              width:"100%",
              padding:"20px 8px",
            }}
            containerStyle={{width:"100%"}}
          />
          <div className=" w-full mb-5 mt-5">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-2 rounded-sm focus:outline-0  w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none  peer"
              placeholder="نام "
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full mb-5 ">
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              id="floating_phone"
              placeholder="تلفن"
              className="block py-2.5 px-2 rounded-sm focus:outline-0 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="text-black w-full mb-5">
            <textarea
              name=""
              className="w-full rounded-sm  focus:outline-0 px-2 border-1 border-gray-300 "
              placeholder="پیام"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-red rounded-lg text-sm w-full px-5 py-2.5 text-center "
          >
            درخواست تور را اسال کنید
          </button>
        </form>
      </div>
    </>
  );
}
