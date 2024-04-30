import React from "react";

interface BtnProps {
  click: () => void;
  label: string;
}

const Button: React.FC<BtnProps> = ({ click, label }) => {
  return (
    <button
      onClick={click}
      className="bg-gray-500 p-2 absolute bottom-0 rounded-lg border
        border-black font-semibold hover:bg-black hover:border-white 
        transition-all linear duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
