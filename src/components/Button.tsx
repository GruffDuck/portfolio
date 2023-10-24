// react
import { FC, ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<ButtonProps> = ({ children, secondary, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${secondary ? "bg-secondary" : "bg-accent"}${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white font-bold text-base sn:text-lg text-bold relative w-full sm:w-fit`}
    >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_50%)]">{children}</p>
          <img src={icon} alt="" />
        </div>
      ) : (
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_50%)]">{children}</p>
      )}
    </button>
  );
};

export default Button;
