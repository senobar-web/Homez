import NorthWestIcon from '@mui/icons-material/NorthWest';
import type {Titles as TitleType} from './Titles.types';
import AOSInit from '../aos/aos';
export default function Title(titleItem: TitleType) {
  return (
    <>
      <AOSInit />
      <div className="flex flex-col items-start justify-start md:flex-row  md:justify-between" data-aos="fade-up">
        <div>
          <h3 className="text-[#181A20] text-2xl font-bold">{titleItem.title}</h3>
          <p className="text-[#717171] text-sm/12">{titleItem.des}</p>
        </div>
        <div className="flex items-end ">
          <a
            href="javascript:void(0)"
            className=" flex items-center justify-center text-[#181A20] text-lg font-bold py-3 px-7   hover:text-red  transition  duration-300 ease-in-out cursor-pointer"
          >
            {titleItem.btn}
            <NorthWestIcon className="h-10" />
          </a>
        </div>
      </div>
    </>
  );
}
