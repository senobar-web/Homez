import Besthomes from '../../module/BestHomes/Besthomes';
import type {BestHouse} from '../../module/BestHomes/Besthouse.types';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';
import AOSInit from '../../module/aos/aos';

export default function BestHouses() {
  const {data: response} = useQuery({
    queryKey: ['besthouse'],
    queryFn: () => ApiRequest<BestHouse[]>('/besthouse-items'),
  });
  const items = response?.data;
  return (
    <>
      <AOSInit />
      <section>
        <div className="container">
          <div className="my-14  text-center" data-aos="fade-up">
            <h3 className="text-[#181A20] text-2xl md:text-4xl font-bold">بهترین خانه ها با بیشترین امکانات</h3>
            <p className="text-[#717171] text-sm mt-2.5"> لورم ایپسوم متن ساختگی با تولید سادگی طراحان گرافیک است</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between ">
            {items?.map((item) => (
              <Besthomes key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
