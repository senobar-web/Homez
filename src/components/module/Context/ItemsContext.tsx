import React, { createContext, useEffect, useState } from "react";
import type { CheapestHousesItem } from "../../template/Home/CheapestHouses.type";

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
    fetch("http://localhost:5000/realEstate")
      .then((res) => res.json())
      .then((data) => {
        setAllRealEstate(data);
      });
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
