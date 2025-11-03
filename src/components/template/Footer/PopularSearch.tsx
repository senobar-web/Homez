import type {OptionsFooter} from './option.type';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';
export default function PopularSearch() {
  const {data: response} = useQuery({
    queryKey: ['popular'],
    queryFn: () => ApiRequest<OptionsFooter[]>('/popular-search'),
  });
  const popular = response?.data;
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-5">جستجوی محبوب</h3>
        <ul>
          {popular?.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href="javascript:void(0)"> {item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
