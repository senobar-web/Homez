import { useEffect, useState } from "react";

type AboutProp ={
    count:number
}
export default function AboutCounter({count}:AboutProp) {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    let interval: number = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 10);
    if (counter === count) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div>
      <h3 className="font-bold text-lg lg:text-3xl"> {counter}  </h3>
    </div>
  );
}
