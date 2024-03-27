import React from 'react'

interface Props {
  children : string
  onClick: () => void;
}
const Button = ({children,onClick}:Props) => {
  return (
   <button className ='bg-blue-400 px-2 py-1 rounded' onClick={onClick}>
    {children}
   </button>
  )
}

export default Button
