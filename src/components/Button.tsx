import React from "react";

interface BtnProps {
  label: string;
  onclick?: () => void;
  style?: string;
}

const Button: React.FC<BtnProps> = ({ label, onclick, style }) => {
  return (
    <button
      onClick={onclick}
      className={`bg-gray-500 p-2 rounded-lg border
        border-black font-semibold hover:bg-black hover:border-white 
        transition-all linear duration-300 ${style}`}
    >
      {label}
    </button>
  );
};

export default Button;
