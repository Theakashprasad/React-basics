import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const Expandable = ({ children, maxChars = 10 }: Props) => {
   let [isExpanded , setExpanded] = useState(false)
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded?children :children.substring(0, maxChars);
  return (
    <p>
      {text}....<button className="bg-slate-300" onClick={()=>setExpanded(!isExpanded)}>{isExpanded?'LESS':'MORE'}</button>
    </p>
  );
};

export default Expandable;
