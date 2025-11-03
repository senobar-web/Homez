import type {OptionsFooter} from './option.type';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';
export default function Access() {
  const {data: response} = useQuery({
    queryKey: ['quick-access'],
    queryFn: () => ApiRequest<OptionsFooter[]>('/quick-access'),
  });
  const access = response?.data;
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-5 "> دسترسی سریع</h3>
        <ul>
          {access?.map((item: OptionsFooter) => (
            <li key={item.id}>
              <a href="javascript:void(0)"> {item.title} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
