import {useState, useEffect} from 'react';
import type {OptionsFooter} from './option.type';
import ApiRequest from '../../module/Api_url/ApiRequest';
export default function PopularSearch() {
  const [popular, setPopular] = useState<OptionsFooter[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<OptionsFooter[]>('/popular-search');
      setPopular(response.data);
    };
    fetchPosts();
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
