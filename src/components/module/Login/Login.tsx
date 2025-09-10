import * as React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import RegisterForm from "../uerAccount/registerForm";
import LoginForm from "../uerAccount/LoginForm";
import { useAuth } from "../Context/AuthUser";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Login() {
  const [isShowLogin, setIsShowLogin] = useState<boolean>(true);
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    borderRadius: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {user ? (
        <>
          <span className="text-white">{user.username} خوش آمدید</span>
          <button onClick={logout} className="text-white">
            خروج از حساب کاربری
          </button>
        </>
      ) : (
        <>
          <button onClick={handleOpen} className="text-white cursor-pointer">
            ورود / ثبت نام
          </button>
          {isShowLogin && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex justify-between items-center border-b-1 border-gray-100 p-5">
                  <h2 className="text-black text-2xl font-bold">
                    به هومز خوش آمدید
                  </h2>
                  <div
                    className="cursor-pointer  group w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 hover:bg-[#cf2e2e] transition duration-300 ease-in-out"
                    onClick={handleClose}
                  >
                    <IoClose className="text-black group-hover:text-white  w-7 h-7" />
                  </div>
                </div>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="ورود" value="1" />
                      <Tab label="ایجاد حساب" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <LoginForm />
                  </TabPanel>
                  <TabPanel value="2">
                    <RegisterForm />
                  </TabPanel>
                </TabContext>
              </Box>
            </Modal>
          )}
        </>
      )}
    </>
  );
}
