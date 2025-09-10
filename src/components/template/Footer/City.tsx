import { useState, useEffect } from "react";
import axios from "axios";
import type { OptionsFooter } from "./option.type";

export default function City() {
  const [cityFooter, setCityFooter] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/city").then((res) => {
      setCityFooter(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <h3 className="font-bold text-lg mb-5"> استان ها</h3>
        <ul>
          {cityFooter.map((item: OptionsFooter) => (
            <li>
              <a href=""> {item.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
