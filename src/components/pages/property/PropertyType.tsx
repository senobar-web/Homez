import Footer from "../../module/Footer/Footer";
import LowestHouse from "../../module/LowestHouse/LowestHouse";
import TopHeader from "../../module/TopHeader/TopHeader";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ContextItems } from "../../module/Context/ItemsContext";
import Breadcrumb from "../../module/Breadcrumb/Breadcrumb";
import SidebarFilter from "./sidebarFilter";
import ListIcon from "@mui/icons-material/List";

export default function PropertyType() {
  const [isOpen, setIsOpen] = useState(false);
  const { allRealEstate } = useContext(ContextItems);
  const [filters, setFilters] = useState({
    priceRange: [0, 9800],
    selectedCity: "",
    selectedRoom: null,
    selectedOptionCheck: [],
    selectedOption: "",
  });
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilter) => ({ ...prevFilter, ...newFilters }));
  };
  const { propertyName } = useParams();
  const filteredData = allRealEstate.filter((item) => {
    const filterRadio =
      filters.selectedOption === "" || item.status === filters.selectedOption;
    const filteredItems =
      filters.selectedOptionCheck.length === 0 ||
      filters.selectedOptionCheck.includes(item.category);
    const filterPrice =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];
    const filteredCity = filters.selectedCity
      ? item.citycenter === filters.selectedCity
      : allRealEstate;
    const filteredRoom = filters.selectedRoom
      ? item.room == filters.selectedRoom
      : allRealEstate;
    return (
      filterRadio &&
      filteredItems &&
      filterPrice &&
      filteredCity &&
      filteredRoom
    );
  });

  return (
    <>
      <TopHeader />
      <div className="text-[#181A20] container mb-2">
        <h3 className="text-2xl font-bold mb-2.5">{propertyName}</h3>
        <Breadcrumb />
      </div>
      <div className="container flex  space-x-12 mb-12 ">
        <div className="hidden lg:flex flex-col bg-white w-[500px] text-black  border-1 border-gray-100 h-[950px] rounded-2xl ">
          <SidebarFilter
            onFilterChange={handleFilterChange}
            priceRange={filters.priceRange}
            selectedCity={filters.selectedCity}
            selectedRoom={filters.selectedRoom}
            selectedOptionCheck={filters.selectedOptionCheck}
            selectedOption={filters.selectedOption}
          />
        </div>
        {/* main */}
        <div className="w-full px-10 text-[#181A20] text-sm  ">
          <div className="mb-12">
            <div className="flex items-center justify-between text-black">
              <p>نمایش همه {filteredData.length} نتایج</p>
              <div className="flex gap-3">
                <p>مرتب سازی بر اساس:</p>
                <p> مرتب سازی پیش فرض</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <LowestHouse key={item.id} {...item} />
                ))
              ) : (
                <p className="text-2xl ">ملکی پیدا نشد</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <>
        <button
          className="bg-red flex lg:hidden text-white w-10 h-10 cursor-pointer rounded-r-md fixed backdrop-blur-3xl  mx-auto top-[40%] left-0 z-40 px-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ListIcon />
        </button>
        {isOpen && (
          <>
            <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
            <div className="right-0 flex flex-col min-h-screen bg-white w-[400px] text-black  overflow-auto  shadow-3xl  fixed top-0 bottom-0  z-50 transition-all">
              <SidebarFilter
                onFilterChange={handleFilterChange}
                priceRange={filters.priceRange}
                selectedCity={filters.selectedCity}
                selectedRoom={filters.selectedRoom}
                selectedOptionCheck={filters.selectedOptionCheck}
                selectedOption={filters.selectedOption}
              />
            </div>
          </>
        )}
      </>
      <Footer />
    </>
  );
}
