import React, { createContext, useEffect, useState } from "react";
import type { CheapestHousesItem } from "../../template/Home/CheapestHouses.type";
import ApiRequest from "../Api_url/ApiRequest";

type ContextItemsProviderProps = {
  children: React.ReactNode;
};
type ContextItemsTypes = {
  allRealEstate: CheapestHousesItem[];
  toggleCheckbox: (title: string) => void;
  checkedItems: { [key: string]: boolean };
};
export const ContextItems = createContext({} as ContextItemsTypes);

const ContextItemsProvider = ({ children }: ContextItemsProviderProps) => {
  const [allRealEstate, setAllRealEstate] = useState<CheapestHousesItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const toggleCheckbox = (title: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<CheapestHousesItem[]>("/realEstate");
      setAllRealEstate(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <ContextItems.Provider
      value={{ allRealEstate, toggleCheckbox, checkedItems }}
    >
      {children}
    </ContextItems.Provider>
  );
};

export default ContextItemsProvider;
