import React from "react";
interface ButtonProps {
  id?: string;
  inner: any;
  onClick?: () => void;
  styleId: number;
  className?: string;
  color?: string;
  enablePadding?: boolean;
}

export default function Button(props: ButtonProps) {
  var enable = props.enablePadding ?? true;
  var style = 1;
  if (props.styleId !== null) {
    style = props.styleId;
  }
  if (style === 2) {
    return (
      <button
        id={props.id}
        type="button"
        onClick={props.onClick}
        className={`${props.className} ${enable ? 'px-4 py-2' : ''} font-semibold text-white bg-${props.color}-600 
        rounded-2xl shadow-md hover:bg-${props.color}-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-8 focus:ring-${props.color}-500 `}

      >
        {props.inner}
      </button>
    );
  } else if (style === 3) {
    return (
      <button
        id={props.id}
        type="button"
        onClick={props.onClick}
        className={`${props.className}  font-semibold text-white bg-transparent
        rounded-2xl shadow-md hover:bg-white-200 focus:outline-3 outline-2 outline-fuchsia-50  focus:ring-1 focus:ring-offset-8
        `}

      >
        {props.inner}
      </button>
    );
  } else if (style === 4) {
    return (
      <button
        id={props.id}
        type="button"
        onClick={props.onClick}
        className={`${props.className} ${enable ? 'px-4 py-2' : ''} font-semibold rounded-md shadow-md 
          ${props.color === "blue"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }
          ${props.color === "blue"
            ? "focus:ring-blue-500"
            : "focus:ring-gray-300"
          }`}
      >
        {props.inner}
      </button>
    );
  } else if (style === 5) {
    return (
      <button
        id={props.id}
        type="button"
        onClick={props.onClick}
        className={`${props.className} ${enable ? 'px-4 py-2' : ''} font-semibold shadow-none
         rounded-2xl hover:bg-white-200 outline-none`}
      >
        {props.inner}
      </button>
    );
  } else {
    return (
      <button
        id={props.id}
        type="button"
        onClick={props.onClick}
        className={`${props.className} ${enable ? 'px-4 py-2' : ''} font-semibold rounded-md shadow-md 
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
        {props.inner}
      </button>
    );
  }
}
