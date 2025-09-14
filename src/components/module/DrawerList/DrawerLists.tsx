import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ContextItems } from "../Context/ItemsContext";
import {  useNavigate } from "react-router-dom";
import Socialmedia from "../SocialMedia/Socialmedia";

export default function DrawerLists() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {allRealEstate,toggleCheckbox}=useContext(ContextItems)
  // const category = contextData.allRealEstate.map((item) => item.category);
  const category = allRealEstate.map((item) => item.category);
  const navigate=useNavigate()
  const unique = [...new Set(category)];
  const handelClick=(category:string)=>{
    toggleCheckbox(category)
    navigate(`/property-type/${category}`)
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu className="text-white w-6 h-6 cursor-pointer " />
      </button>
      {isOpen && (
        <>
          <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
          <div className="left-0 flex flex-col min-h-screen bg-white w-[400px] text-black  overflow-auto  shadow-3xl  pt-5 fixed top-0 bottom-0  z-[9999] transition-all">
            {/* Cart Header */}
            <div className="flex px-5  items-center justify-between  w-full border-b border-b-gray-200  pb-5 ">
              <h2 className="text-2xl font-IRANSans-UltraLight text-black font-bold">
                دسترسی سریع
              </h2>
              <div
                className="group cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 hover:bg-[#cf2e2e] transition duration-75 ease-in"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoClose className="text-black group-hover:text-white  w-7 h-7" />
              </div>
            </div>
            {/* Cart Body */}
            <div className="w-full  ">
              <div className="flex flex-col pt-6 ">
                {unique.map((category, index) => (
                  <span key={index} onClick={()=>handelClick(category)} className="cursor-pointer hover:border-r-2 border-r-red hover:bg-red-50 px-5 py-4 transition-all duration-75 ease-in">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            {/* Cart Footer */}
            <div className="flex flex-col items-end mt-auto mb-8 text-black">
              <div className="flex px-5 justify-between pt-8 pb-6 w-full border-b border-t border-t-gray-200 border-b-gray-200">
                <div>
                  <h3 className="text-gray-400">پشتیبانی تلفنی مشتریان</h3>
                  <p>09121234567</p>
                </div>
                <div>
                  <h3 className="text-gray-400">پشتیبانی آنلاین</h3>
                  <p>hi@homez.com</p>
                </div>
              </div>
              <div className="flex justify-between  w-full py-8 px-5">
                <h3>مارا دنبال کنید</h3>
                <Socialmedia/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
