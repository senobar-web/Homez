import React, {createContext, useState} from 'react';
import type {CheapestHousesItem} from '../../template/Home/CheapestHouses.type';
import ApiRequest from '../Api_url/ApiRequest';
import {useQuery} from '@tanstack/react-query';

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
  // const [allRealEstate, setAllRealEstate] = useState<CheapestHousesItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const toggleCheckbox = (value: string) => {
    setCheckedItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };
  const {data: response} = useQuery({
    queryKey: ['real-estate'],
    queryFn: () => ApiRequest<CheapestHousesItem[]>('/real-estate'),
  });
  const allRealEstate: CheapestHousesItem[] = response?.data || [];
  return (
    <ContextItems.Provider value={{allRealEstate, toggleCheckbox, checkedItems}}>{children}</ContextItems.Provider>
  );
};

export default ContextItemsProvider;
