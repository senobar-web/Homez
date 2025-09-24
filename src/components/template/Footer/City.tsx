import {useState, useEffect} from 'react';
import type {OptionsFooter} from './option.type';
import ApiRequest from '../../module/Api_url/ApiRequest';
export default function City() {
  const [cityFooter, setCityFooter] = useState<OptionsFooter[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<OptionsFooter[]>('/city');
      setCityFooter(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div>
        <h3 className="font-bold text-lg mb-5"> استان ها</h3>
        <ul>
          {cityFooter.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href=""> {item.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
