import { useState } from "react";

export default function StatusBtn({statuses,filterItem }) {
  const [mainCategory, setMainCategory] = useState("برای فروش");
  return (
    <>
      {statuses.map((status:string, index:number) => (
        <button
          type="button"
          className={
            status === mainCategory ? "h-full flex items-center justify-center text-[#181A20] bg-white rounded-lg text-sm font-bold py-2 px-4  cursor-pointer" : " h-full flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-white text-sm font-bold py-2 px-4  cursor-pointer"
          }
          key={index}
          onClick={()=>{
            setMainCategory(status)
            filterItem(status)
          }}
        >
          {status}
        </button>
      ))}
    </>
  );
}
