import Contact from "../../module/Contact/Contact";
import Footer from "../../module/Footer/Footer";
import Header from "../../module/Header/Header";
import Login from "../../module/Login/Login";
import ScrollTop from "../../module/scrollToTop/ScrollBtn";
import BestHouses from "../../template/Home/BestHouses";
import Blog from "../../template/Home/Blog";
import CheapestHouses from "../../template/Home/CheapestHouses";
import CityHouses from "../../template/Home/CityHouses";
import PopularFeatures from "../../template/Home/PopularFeatures";
import TypesOfApartments from "../../template/Home/TypesOfApartments";

export default function Index() {
  return (
    <div>
      <Header />
      <Login/>
      <TypesOfApartments/>
      <BestHouses/>
      <CheapestHouses/>
      <CityHouses/>
      <PopularFeatures/>
      <Blog/>
      <Contact/>
      <ScrollTop/>
      <Footer/>
    </div>
  );
}
