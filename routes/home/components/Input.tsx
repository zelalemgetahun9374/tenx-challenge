import React, { useState, useContext, useEffect, createContext } from "react";
import { FormContext } from "./Form";
import Selector from "./Selector";
import Box from '@mui/material/Box';
import { RubericInterface } from './Form'

interface AppContextInterface {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const choiceContext = createContext<AppContextInterface | null>(null);

interface Props {
  name: string,
  items: number
}

export default function Input({ name, items }: Props) {
  const appContext = useContext(FormContext);
  const mark = appContext!.mark;
  const setMark  = appContext!.setMark;
  const fieldName = name === "Field1" ? mark["Field1"] : (name === "Field2" ? mark["Field3"] : mark["Field3"] )
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const newMark: RubericInterface = JSON.parse(JSON.stringify(mark));

    if (name === "Field1"){
      newMark["Field1"]["value"] = selected;
      setMark(newMark);
    }

    if (name === "Field2"){
      newMark["Field2"]["value"] = selected;
      setMark(newMark);
    }

    if (name === "Field3"){
      newMark["Field3"]["value"] = selected;
      setMark(newMark);
    }
    
  }, [selected]);

  function clickHandler(evt: any) {
    setSelected(parseInt(evt.currentTarget.value, 10));
  }
  const countList = [];
  for (let i = 1; i <= items; i++) {
    countList.push(i);
  }

  const choiceAppContext: AppContextInterface = {
    selected: selected,
    setSelected: setSelected
  };

  return (
    <Box>
      <Box 
       sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: '4px'
       }}
    >
      {name}
      
      <select value={selected} onChange={(event) => clickHandler(event)}>
        <option value="0">&nbsp; / {items}</option>
        {countList.map((i) => (
          <option value={i} key={i}>
            {i} / {items}
          </option>
        ))}
      </select>
      </Box>
        <choiceContext.Provider value={choiceAppContext}>
          <Selector boxCount={items} />
        </choiceContext.Provider>
    </Box>
  );
}

