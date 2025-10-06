export type resSliderProps = {
  onFilterChange: (newFilters: Partial<resSliderProps>) => void;
  priceRange: number[];
  selectedCity: string;
  selectedRoom: number | string | null;
  selectedOption: string;
};
