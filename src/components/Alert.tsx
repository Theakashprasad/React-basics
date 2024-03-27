import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onclose:()=>void;

}
const Alert = ({ children ,onclose}: Props) => {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
      role="alert"
    >
      <p>{children}</p>
      <button
        className="absolute top-0 right-0 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={onclose}
      >
        X
      </button>
    </div>
  );
};

export default Alert;
