import React from 'react'

interface Props{
    cartItems: number
}
const Nav = ({cartItems}:Props) => {
    
  return (
    <div>
      navBar : {cartItems}
    </div>
  )
}

export default Nav
