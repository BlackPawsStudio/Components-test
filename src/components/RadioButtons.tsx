import { useState } from "react";
import { cn } from "../utils";

interface RadioButtonsProps {
  options: string[];
  label?: string;
}

export const RadioButtons = ({ options, label }: RadioButtonsProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {label && <label className="text-lg font-semibold">{label}</label>}
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div
            key={option}
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => {
              if (selectedOption === option) setSelectedOption(null);
              else setSelectedOption(option);
            }}
          >
            <div
              className={cn(
                "min-w-2 min-h-2 rounded-full outline outline-black transition-all duration-300 outline-offset-1 ml-[2px]",
                option === selectedOption && "bg-blue-500 outline-blue-500"
              )}
            ></div>
            <label className="whitespace-nowrap">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
