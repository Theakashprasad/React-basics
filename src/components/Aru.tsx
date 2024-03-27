import React, { useState } from 'react'

const Aru = () => {
    const [tags, setTags] = useState(['happy' , 'cheerful']);
   
    const handleClick = ()=>{
        // ADD
        setTags([...tags , 'exciting']);
        // //REMOVE
        setTags(tags.filter(tag => tag != 'happy'))
        // //UPDATE
        setTags(tags.map(tag => tag == 'happy' ? 'happynes' : tag))
    }
    return (
    <div>
        {tags.map(bug => <p>{bug}</p>)}
      <button onClick={handleClick}>
        click
      </button>
    </div>
  )
}

export default Aru
