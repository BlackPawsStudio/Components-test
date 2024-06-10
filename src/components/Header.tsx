import { AvailableComponents } from "../types";
import { cn } from "../utils";

interface HeaderProps {
  selectedComponent: AvailableComponents;
  setSelectedComponent: (component: AvailableComponents) => void;
}

const components: AvailableComponents[] = [
  "Radio Buttons",
  "Discount Code Button",
  "Discount Code Textbox",
  "Base Note Field",
];

export const Header = ({
  selectedComponent,
  setSelectedComponent,
}: HeaderProps) => (
  <header className="w-screen py-5 px-12">
    <h1 className="text-center text-3xl mb-5">Selected displayed component</h1>
    <div className="flex gap-5 justify-center">
      {components.map((component) => (
        <div
          key={component}
          className={cn(
            "cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300",
            selectedComponent === component && "underline font-bold"
          )}
          onClick={() => setSelectedComponent(component)}
        >
          {component}
        </div>
      ))}
    </div>
  </header>
);
