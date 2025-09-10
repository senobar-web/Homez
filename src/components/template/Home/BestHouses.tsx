import Besthomes from "../../module/BestHomes/Besthomes";
import type { BestHouse } from "../../module/BestHomes/Besthouse.types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BestHouses() {
  const[items,setItems]=useState<BestHouse[]>([])
  useEffect(() => {
    axios.get("http://localhost:5000/BesthouseItems").then((res) => {
      setItems(res.data);
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="my-14  text-center" data-aos="fade-up">
            <h3 className="text-[#181A20] text-2xl md:text-4xl font-bold">
              بهترین خانه ها با بیشترین امکانات
            </h3>
            <p className="text-[#717171] text-sm mt-2.5">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی طراحان گرافیک است
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between ">
            {items.map((item) => (
              <Besthomes key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
