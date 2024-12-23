import { strict } from "assert";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title?: string;
  containersStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  containerStyles?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

// export interface CarCardProps {
//   model: string;
//   make: string;
//   mpg: number;
//   transmission: string;
//   year: number;
//   drive: string;
//   cityMPG: number;
// }

export interface FilterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: string;
  model: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
