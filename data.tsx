import {RiHome6Line} from 'react-icons/ri';
import {PiBuildingApartmentLight} from 'react-icons/pi';
import {GiWindowBars} from 'react-icons/gi';
import {GiGreenhouse} from 'react-icons/gi';
import {RiHomeOfficeLine} from 'react-icons/ri';
import {SiHomeadvisor} from 'react-icons/si';
import {IoIosHeartEmpty} from 'react-icons/io';
import {PiNewspaperDuotone} from 'react-icons/pi';
import {MdOutlineShare} from 'react-icons/md';
import {TfiPrinter} from 'react-icons/tfi';
import {MdPlaylistAddCheckCircle} from 'react-icons/md';
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {CiInstagram} from 'react-icons/ci';

const titlesItem = [
  {
    id: 1,
    title: 'انواع آپارتمان ها را بشناسید',
    des: 'لورم ایپسوم متن ساختگی با تولید سادگی است',
    btn: 'نمایش بیشتر',
  },
  {
    id: 2,
    title: 'بهترین خانه ها با بیشترین امکانات',
    des: ' لورم ایپسوم متن ساختگی با تولید سادگی طراحان گرافیک است',
    btn: 'نمایش بیشتر',
  },
  {
    id: 3,
    title: 'بهترین املاک ما بانازلترین قیمت ها',
    des: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت است',
    btn: 'مشاهده همه ویژگی ها ',
  },
  {
    id: 4,
    title: 'ویژگی های محبوب را کشف کنید',
    des: '  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است',
    btn: 'برای فروش ',
  },
  {
    id: 5,
    title: 'وبلاگ ما',
    des: 'لورم ایپسوم متن ساختگی با تولید سادگی است',
    btn: 'نمایش بیشتر',
  },
  //   {
  //     id: 6,
  //     title: " برای اطلاعات بیشتر باما تماس بگیرید",
  //     des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است  ",
  //     btn: "نمایش بیشتر",
  //   },
];

const ApartmentItems = [
  {
    id: 1,
    title: 'ویلا',
    icon: <GiGreenhouse className="text-black size-9 group-hover:text-gray-200" />,
    count: 4,
  },
  {
    id: 2,
    title: 'خانه',
    icon: <RiHome6Line className="text-black size-9 group-hover:text-gray-200" />,
    count: 7,
  },
  {
    id: 3,
    title: 'آپارتمان ها',
    icon: <PiBuildingApartmentLight className="text-black size-9 group-hover:text-gray-200" />,
    count: 3,
  },
  {
    id: 4,
    title: 'دفتر',
    icon: <RiHomeOfficeLine className="text-black size-9 group-hover:text-gray-200" />,
    count: 4,
  },
  {
    id: 5,
    title: 'خانه کلنگی',
    icon: <SiHomeadvisor className="text-black size-9 group-hover:text-gray-200" />,
    count: 2,
  },
  {
    id: 6,
    title: 'خانه ییلاقی',
    icon: <GiWindowBars className="text-black size-9 group-hover:text-gray-200" />,
    count: 1,
  },
];
const shapeIcon = [
  {id: 1, icon: <IoIosHeartEmpty />},
  {id: 2, icon: <PiNewspaperDuotone />},
  {id: 3, icon: <MdOutlineShare />},
  {id: 4, icon: <TfiPrinter />},
];
const featureItem = [
  {
    id: 1,
    icon: <MdPlaylistAddCheckCircle className="size-7" />,
    title: 'معاملات عالی پیدا کنید',
  },
  {
    id: 2,
    icon: <MdPlaylistAddCheckCircle className="size-7" />,
    title: 'لورم ایپسوم متن ساختگی',
  },
  {
    id: 3,
    icon: <MdPlaylistAddCheckCircle className="size-7" />,
    title: 'مشاهده تمام املاک',
  },
];
const social = [
  {id: 1, icon: <FaLinkedinIn className="hover:text-red transition ease-in delay-75 " />},
  {id: 2, icon: <CiInstagram className="hover:text-red transition ease-in delay-75 " />},
  {id: 3, icon: <FaTwitter className="hover:text-red transition ease-in delay-75 " />},
  {id: 4, icon: <FaFacebookF className="hover:text-red transition ease-in delay-75 " />},
];

export {titlesItem, ApartmentItems, shapeIcon, featureItem, social};
