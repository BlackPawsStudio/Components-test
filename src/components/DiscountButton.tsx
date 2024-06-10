import { useEffect, useState } from "react";
import { generateDiscountCode } from "../utils";

export const DiscountButton = () => {
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isCopied) setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  return (
    <div className={"flex flex-col gap-4"}>
      <div>
        {discountCode ? (
          <>
            <label className="text-lg">Your discount code:</label>
            <div className="flex gap-2 items-center flex-wrap">
              <div className="text-lg font-semibold border-2 border-black px-2 rounded-md">
                {discountCode}
              </div>
              <button
                className="bg-slate-500 text-white px-2 py-1 rounded-md"
                onClick={() => {
                  setIsCopied(true);
                  navigator.clipboard.writeText(discountCode);
                }}
              >
                {isCopied ? "Copied!" : "Copy!"}
              </button>
            </div>
          </>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setDiscountCode(generateDiscountCode())}
          >
            Generate Discount Code
          </button>
        )}
      </div>
    </div>
  );
};
