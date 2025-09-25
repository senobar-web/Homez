import Footer from '../../module/Footer/Footer';
import TopHeader from '../../module/TopHeader/TopHeader';
import Property from '../../template/details/Property';
import AdditionalDetails from '../../template/details/AdditionalDetails';

export default function Details() {
  return (
    <div className="bg-gray-50">
      <TopHeader />
      <div className="container text-[#181A20] ">
        <Property />
        <section className="mt-10">
          <AdditionalDetails />
        </section>
      </div>
      <Footer />
    </div>
  );
}
