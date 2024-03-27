import { useState } from "react";
import { AiFillAliwangwang, AiFillAmazonCircle } from "react-icons/ai";

interface Props {
  onclick: () => void;
}
const Icon = ({ onclick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);setStatus 
    onclick();
  };
  if (status)
    return <AiFillAliwangwang className="h-12 w-12" onClick={toggle} />;
  return <AiFillAmazonCircle className="h-12 w-12" onClick={toggle} />;
};

export default Icon;
