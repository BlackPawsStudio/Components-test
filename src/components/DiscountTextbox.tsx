import { useRef } from "react";

export const DiscountTextbox = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const applyDiscount = () => {
    if (!inputRef.current) return;
    const discountCode = inputRef.current.value;
    if (!/^(NEWCODE|DISCOUNT)\d{4}$/.test(discountCode)) {
      alert(
        "Invalid discount code! \n(take code from Generate Discount Code button)"
      );
      return;
    }
    alert(`Applying discount code: ${discountCode}`);
  };

  return (
    <div className="flex flex-col w-60 gap-2">
      <label className="text-lg leading-5">Your discount code:</label>
      <input
        ref={inputRef}
        type="text"
        className="border-2 border-black px-2 rounded-md w-full focus:outline-blue-500"
        placeholder="Enter your discount code here"
      />
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md mt-2 w-full"
        onClick={applyDiscount}
      >
        Apply
      </button>
    </div>
  );
};
