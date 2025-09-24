import {useEffect, useState} from 'react';

type AboutProp = {
  count: number;
};
export default function AboutCounter({count}: AboutProp) {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    if (count <= 0) return;
    const interval = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount >= count) {
          clearInterval(interval);
          return count;
        }
        return prevCount + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div>
      <h3 className="font-bold text-lg lg:text-3xl"> {counter} </h3>
    </div>
  );
}
