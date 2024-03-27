import { useState } from "react";

interface Props{
  items : string[];
  heading: string;
  onSelectItem: (item: string)=> void
}

function ListGroup({items,heading ,onSelectItem} : Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{heading}</h1>
      <ul className="list-none">
        {items.map((item, index) => (
          <li 
            key={item}
            className={`py-2 px-4 cursor-pointer ${selectedIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => {setSelectedIndex(index)
            onSelectItem(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
