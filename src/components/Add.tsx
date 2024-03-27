import React, { useState } from 'react'

const Add = () => {
    const [add, setAdd] = useState<number>(0)

  return (
    <div className='space-x-28 flex justify-center' >
      <button onClick={()=>setAdd(add+1)}>+</button>
      <span>{add}</span>
      <button onClick={()=>setAdd(add-1)}>-</button>
    </div>
  )
}

export default Add
