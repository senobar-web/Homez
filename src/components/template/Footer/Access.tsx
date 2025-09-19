import { useState, useEffect } from "react";
import type { OptionsFooter } from "./option.type";
import ApiRequest from "../../module/Api_url/ApiRequest";
export default function Access() {
  const [access, setAccess] = useState<OptionsFooter[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<OptionsFooter[]>("/quickAccess");
      setAccess(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-5 "> دسترسی سریع</h3>
        <ul>
          {access.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href="javascript:void(0)"> {item.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
