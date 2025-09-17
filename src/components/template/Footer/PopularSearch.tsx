import { useState, useEffect } from "react";
import axios from "axios";
import type { OptionsFooter } from "./option.type";
import { Api_Url } from "../../module/Api_url/API";
export default function PopularSearch() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get(`${Api_Url}/popularSearch`).then((res) => {
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
