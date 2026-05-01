"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Spinner from "@/app/_components/feadback/Spinner";

const Button = ({
  text,
  onClick,
  to,
  variant = "primary",
  loading,
  disabled,
  className,
  size = "lg",
  icon,
  iconDirection = "right",
  hasFullWidth = false,
  textWeight = "bold",
}) => {
  const router = useRouter();
  const base = ` rounded-full   transition outline-none shadow-none flex items-center justify-center gap-3 ${
    loading || disabled ? "cursor-not-allowed" : "cursor-pointer"
  } `;

  const styles = {
    primary:
      "bg-primary shadow-primary text-white hover:bg-primary-container  ",
    white: "text-[#4F46E5] bg-white",
    glass:
      " bg-white/4 text-tertiary border border-white/5 backdrop-blur-[20px] hover:bg-white/10",
  };
  const textStyle = {
    bold: "font-bold",
  };
  const sizes = {
    xl: " h-[60px] md:h-[66px] px-10 text-sm md:text-base",
    lg: " text-sm sm:text-base  h-12 px-2 sm:px-4 ",
    md: " text-xs sm:text-sm h-11 px-4 ",
    sm: "px-4 h-9 tracking-[1px] text-xs",
    free: "",
  };

  const spinnerStyle = {
    primary: "border-primary-3",
    glass: "border-tertiary",
    ghost: "border-tertiary",
  };
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (to) {
          router.push(to);
        }
      }}
      className={`${base} ${textStyle[textWeight ?? "bold"]} ${className ?? ""} ${hasFullWidth ? "w-full" : ""} ${
        styles[variant]
      } ${sizes[size]} `}
    >
      {iconDirection === "left" ? (
        loading ? (
          <Spinner className={spinnerStyle[variant]} />
        ) : icon ? (
          icon
        ) : null
      ) : null}
      {text && <span>{text}</span>}
      {iconDirection === "right" ? (
        loading ? (
          <Spinner className={spinnerStyle[variant]} />
        ) : icon ? (
          icon
        ) : null
      ) : null}
    </button>
  );
};

export default Button;
