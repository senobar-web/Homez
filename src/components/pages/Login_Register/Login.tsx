// import NorthWestIcon from "@mui/icons-material/NorthWest";
import Footer from "../../module/Footer/Footer";
import TopHeader from "../../module/TopHeader/TopHeader";
import LoginForm from "../../module/uerAccount/LoginForm";
import RegisterForm from "../../module/uerAccount/registerForm";

export default function Login() {
  return (
    <>
      <TopHeader />
      <div className="container flex flex-col md:flex-row gap-5 my-12">
        <div className="w-full md:w-[50%] shadow-2xl rounded-2xl">
          <LoginForm />
        </div>
        <div className="w-full md:w-[50%] shadow-2xl rounded-2xl">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
