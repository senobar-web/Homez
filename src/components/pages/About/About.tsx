import Contact from '../../module/Contact/Contact';
import Footer from '../../module/Footer/Footer';
import IndexAbout from '../../template/About/IndexAbout';
import TopHeader from '../../module/TopHeader/TopHeader';

export default function About() {
  return (
    <>
      <TopHeader />
      <IndexAbout />
      <Contact />
      <Footer />
    </>
  );
}
