import Footer from '../../module/Footer/Footer';
import Form from '../../module/Form/Form';
import Contact from '../../module/Contact/Contact';
import TopHeader from '../../module/TopHeader/TopHeader';
import Map from '../../template/contactUs/Map';
import {ToastContainer} from 'react-toastify';
export default function ContactUs() {
  return (
    <>
      <TopHeader />
      <section>
        <div>
          <Map>
            <Form />
          </Map>
        </div>
        <div className="flex justify-start md:items-center md:justify-end container px-2 mb-20 mt-16 md:-mt-130 lg:-mt-60">
          <div className="text-black  md:w-[300px] lg:w-[450px]  mb-10 px-2.5 md:px-5">
            <h3 className="text-black text-2xl w-full font-bold mb-5 ">با تیم هومز در ارتباط باشید!</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      <ToastContainer position="top-right" rtl />
    </>
  );
}
