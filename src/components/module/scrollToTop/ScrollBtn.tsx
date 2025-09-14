import  { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => {
    if (window.pageYOffset > 25) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="px-3.5 py-3.5 shadow-4xl fixed bottom-6 left-6 z-40 border-2 border-red  bg-inherit rounded-full flex justify-center items-center  cursor-pointer "
          onClick={() => scrollToTop()}
        >
          <FaArrowUp className="text-red size-4" />
        </button>
      )}
    </div>
  );
}
