import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const generateDiscountCode = () => {
  return `NEWCODE${Math.floor(Math.random() * 10000)}`;
};
