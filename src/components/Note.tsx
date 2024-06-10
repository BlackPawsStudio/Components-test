import { useLayoutEffect, useRef } from "react";

export const Note = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <p className="bg-slate-400 rounded-xl p-2" ref={ref}>
      {text}
    </p>
  );
};
