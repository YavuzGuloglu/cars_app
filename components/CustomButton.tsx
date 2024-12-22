"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containersStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled = false,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containersStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="w-10">
          <Image
            src={rightIcon}
            alt="right icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
