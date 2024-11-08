import React from "react";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  styleId: number;
  color: string;
}

export default function Button(props: ButtonProps) {
  var style = 1;
  if (props.styleId !== null) {
    style = props.styleId;
  }
  if (style === 2) {
    return (
      <button
        type="button"
        className={`px-4 py-2 font-semibold text-white bg-${props.color}-600 
        rounded-2xl shadow-md hover:bg-${props.color}-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-8 focus:ring-${props.color}-500`}
      >
        {props.label}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`px-4 py-2 font-semibold rounded-md shadow-md 
          ${props.color === "blue"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }
          focus:outline-none focus:ring-2 focus:ring-offset-2 
          ${props.color === "blue"
            ? "focus:ring-blue-500"
            : "focus:ring-gray-300"
          }`}
      >
        {props.label}
      </button>
    );
  }
}
