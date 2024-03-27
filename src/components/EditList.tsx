import React, { useState } from "react";

interface Edit {
  value: string;
}

interface Props {
  value: Edit;
  addValue: Edit[];
  setAddValue: React.Dispatch<React.SetStateAction<Edit[]>>
}

const EditList = ({ value, addValue,setAddValue }: Props) => {
  const [editInput, setEditInput] = useState(false);
  const [editNewValue, setEditNewValue] = useState<string>(value.value);
  const handelClick = (value: string): void => {
    setAddValue(addValue.map((item)=>
           item.value == value ? {...item, value:editNewValue} : item
    ))
    setEditInput(false)
  };
  return (
    <div className="space-x-3">
      {editInput ? (
        <>
          <input
            type="text"
            placeholder="edit text"
            value={editNewValue}
            onChange={(e) => setEditNewValue(e.target.value)}
          />
          <button onClick={() => handelClick(value.value)}>click</button>
        </>
      ) : (
        <>
          <span>{value.value}</span>
          <button
            onClick={() => {
              setEditInput(!editInput);
            }}
          >
            EDIT
          </button>
        </>
      )}
    </div>
  );
};

export default EditList;
