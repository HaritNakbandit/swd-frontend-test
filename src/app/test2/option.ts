import ThFlag from "../../assets/thai_flag.png";
import FrFlag from "../../assets/france_flag.png";
import UsFlag from "../../assets/american_flag.png";
import { StaticImageData } from "next/image";

export interface Option {
  value: string;
  label: string;
}

export interface OptionWithImg {
  value: string;
  label: string;
  img: StaticImageData;
}

export const optionTitle = [
  {
    value: "mr",
    label: "MR",
  },
  {
    value: "mrs",
    label: "MRS",
  },
  {
    value: "ms",
    label: "MS",
  },
];

export const optionNationally = [
  {
    value: "thai",
    label: "Thai",
  },
  {
    value: "american",
    label: "American",
  },
  {
    value: "france",
    label: "France",
  },
];

export const optionGender = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "unisex",
    label: "Unisex",
  },
];

export const optionCountyCode = [
  {
    value: "+66",
    label: "+66",
    img: ThFlag,
  },
  {
    value: "+1",
    label: "+1",
    img: UsFlag,
  },
  {
    value: "+33",
    label: "+33",
    img: FrFlag,
  },
];