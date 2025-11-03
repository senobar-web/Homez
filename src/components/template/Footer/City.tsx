import type {OptionsFooter} from './option.type';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';
export default function City() {
  const {data: response} = useQuery({
    queryKey: ['city'],
    queryFn: () => ApiRequest<OptionsFooter[]>('/city'),
  });
  const cityFooter = response?.data;
  return (
    <>
      <div>
        <h3 className="font-bold text-lg mb-5"> استان ها</h3>
        <ul>
          {cityFooter?.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href=""> {item.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
