import Index from "./src/components/pages/Home/Index";
import NotFound from "./src/components/pages/notFound/NotFound";
import About from "./src/components/pages/About/About";
import ContactUs from "./src/components/pages/Contact/ContactUs";
import PropertyType from "./src/components/pages/property/PropertyType";
import Details from "./src/components/pages/detailes/Details";
let routes = [
  { path: "/", element: <Index /> },
  { path: "*", element: <NotFound /> },
  { path: "/about", element: <About />,nameKey:'breadcrumb.about' },
  { path: "/contact", element: <ContactUs /> },
   { path: "/property-type/:propertyName", element: <PropertyType />,nameKey:'breadcrumb.propertyType'  },
  { path: "/property/:propertyID", element: <Details /> },
];
export default routes;
