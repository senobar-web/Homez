import Footer from "../../module/Footer/Footer";
import Form from "../../module/Form/Form";
import Contact from "../../module/Contact/Contact";
import TopHeader from "../../module/TopHeader/TopHeader";
import Map from "../../template/contactUs/Map";

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
        {/* <div className="flex justify-start md:items-center md:justify-end px-2 mb-20 mt-16 md:-mt-130 lg:-mt-60  bg-red-400"> */}
        <div className="flex justify-start md:items-center md:justify-end container px-2 mb-20 mt-16 md:-mt-130 lg:-mt-60  bg-red-400">
          <div className="text-black  w-[450px] mb-10 px-2.5 md:px-5 bg-yellow-400">
            <h3 className="text-black text-2xl font-bold mb-5 w-[150px]">
              با تیم هومز  در ارتباط باشید!
            </h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
