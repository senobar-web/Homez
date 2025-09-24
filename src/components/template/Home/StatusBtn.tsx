import {useState} from 'react';
interface StatusBtnProps {
  statuses: string[];
  filterItem: (status: string) => void;
}
export default function StatusBtn(statusButton: StatusBtnProps) {
  const [mainCategory, setMainCategory] = useState('برای فروش');
  return (
    <>
      {statusButton.statuses.map((status: string, index: number) => (
        <button
          type="button"
          className={
            status === mainCategory
              ? 'h-full flex items-center justify-center text-[#181A20] bg-white rounded-lg text-sm font-bold py-2 px-4  cursor-pointer'
              : ' h-full flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-white text-sm font-bold py-2 px-4  cursor-pointer'
          }
          key={index}
          onClick={() => {
            setMainCategory(status);
            statusButton.filterItem(status);
          }}
        >
          {status}
        </button>
      ))}
    </>
  );
}
