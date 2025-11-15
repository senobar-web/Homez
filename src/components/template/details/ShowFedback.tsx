import {FaCircleUser} from 'react-icons/fa6';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import ApiRequest from '../../module/Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';
type ShowFedbackProps = {
  id: number;
  name: string;
  rating: number;
  viewpoint: string;
  createdAt: string;
};
export default function ShowFedback() {
  const {data: response} = useQuery({
    queryKey: ['comments'],
    queryFn: () => ApiRequest<ShowFedbackProps[]>('/comments'),
  });
  const userMessage = response?.data;
  return (
    <>
      {userMessage && (
        <div>
          {userMessage.map((item) => (
            <>
              <div className="bg-white rounded-2xl my-10 px-5 py-6 shadow-xs " key={item.id}>
                <div>
                  <h5 className="mb-6">{`5 (1 نظر)`}</h5>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3">
                    <div className="flex items-center gap-3">
                      <FaCircleUser className="w-20 h-20 text-gray-300" />
                      <div>
                        <p> {item.name} </p>
                        <p>{new Date(item.createdAt).toLocaleDateString('fa')} </p>
                      </div>
                    </div>
                    <div className="flex">
                      {new Array(Math.trunc(item.rating)).fill(0).map((_, index) => (
                        <FontAwesomeIcon key={`filled-${index}`} className="text-yellow-500 w-5 h-5" icon={faStar} />
                      ))}
                      {new Array(5 - Math.trunc(item.rating)).fill(0).map((_, index) => (
                        <FontAwesomeIcon key={`empty-${index}`} className="text-gray-300 w-5 h-5" icon={faStar} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5"> {item.viewpoint}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}
