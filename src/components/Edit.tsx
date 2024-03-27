import React, { useState } from "react";
import EditList from "./EditList";
import { number } from "zod";

interface Edit{
    value : string
}

const Edit = () => {

const [value, valueEdit] = useState<string>("");
const [addValue, setAddValue] = useState<Edit[]>([])

const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
     valueEdit(e.target.value)
};
const handlerAdd = ():void =>{
    setAddValue([...addValue,{value:value}]);
    valueEdit('')
}

  return (
    <div>
      <input type="text" placeholder="type" onChange={handler} value={value}/>
      <button onClick={handlerAdd}>Enter</button>
      <div className="">
         {
            addValue.map((item)=>(
                <EditList
                 value={item}
                 addValue = {addValue}
                 setAddValue = {setAddValue}
                />
            ))
         }
      </div>
    </div>
  );
};

export default Edit;
