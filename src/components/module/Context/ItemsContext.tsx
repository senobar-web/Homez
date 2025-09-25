import React, {createContext, useEffect, useState} from 'react';
import type {CheapestHousesItem} from '../../template/Home/CheapestHouses.type';
import ApiRequest from '../Api_url/ApiRequest';

type ContextItemsProviderProps = {
  children: React.ReactNode;
};
type ContextItemsTypes = {
  allRealEstate: CheapestHousesItem[];
  toggleCheckbox: (value: string) => void;
  checkedItems: string[];
};
export const ContextItems = createContext({} as ContextItemsTypes);

const ContextItemsProvider = ({children}: ContextItemsProviderProps) => {
  const [allRealEstate, setAllRealEstate] = useState<CheapestHousesItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const toggleCheckbox = (value: string) => {
    setCheckedItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest<CheapestHousesItem[]>('/real-estate');
      setAllRealEstate(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <ContextItems.Provider value={{allRealEstate, toggleCheckbox, checkedItems}}>{children}</ContextItems.Provider>
  );
};

export default ContextItemsProvider;
