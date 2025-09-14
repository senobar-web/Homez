import { useState, useEffect } from "react";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type ShowFedbackProps={
    name:string,
    rating:number,
    viewpoint:string

}
export default function ShowFedback() {
  const [userMessage, setUserMessage] = useState<ShowFedbackProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then((res) => setUserMessage(res.data))
      .catch((error) => console.error("error fetching comment", error));
  }, []);

  return (
    <>
      {userMessage && (
        <div>
          {userMessage.map((item) => (
            <>
              <div className="bg-white rounded-2xl my-10 px-5 py-6 shadow-xs ">
                <div>
                  <h5 className="mb-6">{`5 (1 نظر)`}</h5>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3">
                    <div className="flex items-center gap-3">
                      <FaCircleUser className="w-20 h-20 text-gray-300" />
                      <div>
                        <p> {item.name} </p>
                        <p>۱۴ بهمن ۱۴۰</p>
                      </div>
                    </div>
                    <div className="flex">
                      {new Array(Math.trunc(item.rating)).fill(0).map(() => (
                        <FontAwesomeIcon
                          className="text-yellow-500 w-5 h-5"
                          icon={faStar}
                        />
                      ))}
                      {new Array(5 - Math.trunc(item.rating))
                        .fill(0)
                        .map(() => (
                          <FontAwesomeIcon
                            className="text-gray-300 w-5 h-5"
                            icon={faStar}
                          />
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
