import { ReactNode } from "react";

interface buttonProps {
  text: string;
  icon: ReactNode | string;
}
const Button = ({ text, icon }: buttonProps): JSX.Element => {
  return (
    <button className="px-3 py-1 rounded-2xl bg-[var(--tertiary)] text-[var(--secondary)] flex items-center gap-1 ml-auto mt-10">
      {text} <span className=" text-xl">{icon}</span>
    </button>
  );
};

export default Button;
