import { useState, useEffect } from "react";
import axios from "axios";
import type { OptionsFooter } from "./option.type";

export default function PopularSearch() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/popularSearch").then((res) => {
      setPopular(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-5">جستجوی محبوب</h3>
        <ul>
          {popular.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href="javascript:void(0)"> {item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
