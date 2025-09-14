import ContentHeader from "../../template/contentHeader/ContentHeader.tsx";
import TopHeader from "../TopHeader/TopHeader.tsx";
export default function Header() {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('../img/slider1.jpg')]">
        <TopHeader/>
        <ContentHeader />
      </section>
    </>
  );
}
