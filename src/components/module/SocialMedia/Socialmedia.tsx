import {social} from '../../../../data';
import {useState} from 'react';

export default function Socialmedia() {
  const [icons] = useState(social);
  return (
    <>
      <div className="flex  gap-5 cursor-pointer group ">
        {icons.map((item) => (
          <p key={item.id}>{item.icon}</p>
        ))}
      </div>
    </>
  );
}
