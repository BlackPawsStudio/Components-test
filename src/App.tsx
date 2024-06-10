import { useEffect, useRef, useState } from "react";
import { RadioButtons } from "./components/RadioButtons";
import { Header } from "./components/Header";
import { AvailableComponents } from "./types";
import { cn } from "./utils";
import { DiscountButton } from "./components/DiscountButton";
import { DiscountTextbox } from "./components/DiscountTextbox";
import { NoteField } from "./components/NoteField";

export const App = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<AvailableComponents>("Radio Buttons");

  const [isContentCentered, setIsContentCentered] = useState<boolean>(true);

  const [{ w, h }, setResizeSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  const resizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resizeRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeRef.current)
        setResizeSize({
          w: resizeRef.current.offsetWidth,
          h: resizeRef.current.offsetHeight,
        });
    });
    resizeObserver.observe(resizeRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <Header
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      <div className="w-screen min-h-[50%] h-fit py-12 mt-16 flex items-center justify-center flex-col">
        <h3>
          {w}x{h}
        </h3>
        <div
          className={cn(
            "border-2 border-black mx-auto h-fit max-w-screen w-1/3 p-5 resize overflow-auto",
            isContentCentered && "flex justify-center"
          )}
          ref={resizeRef}
        >
          {selectedComponent === "Radio Buttons" && (
            <RadioButtons
              label={"Choose your options:"}
              options={["Option A", "Option B", "Option C"]}
            />
          )}
          {selectedComponent === "Discount Code Button" && <DiscountButton />}
          {selectedComponent === "Discount Code Textbox" && <DiscountTextbox />}
          {selectedComponent === "Base Note Field" && <NoteField />}
        </div>
        <span>You can resize this component! ↑</span>
        <div className="mt-4 flex cursor-pointer">
          <input
            type="checkbox"
            id="center-content"
            checked={isContentCentered}
            className="cursor-pointer"
            onChange={() => setIsContentCentered((prev) => !prev)}
          />
          <label htmlFor="center-content" className="cursor-pointer ml-2">
            Center content
          </label>
        </div>
      </div>
    </div>
  );
};
