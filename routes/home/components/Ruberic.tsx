import React, { useContext } from "react";
import Input from "./Input";
import { FormContext } from "./Form";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Ruberic() {
  const formContext = useContext(FormContext);
  const mark = formContext!.mark;
  const total_value = mark.Field1.value + mark.Field2.value + mark.Field3.value;
  const total_items = mark.Field1.total + mark.Field2.total + mark.Field3.total;

  let mark_value = `${total_value} / ${total_items}`;

  const ruberics: any[] = [];

  for (let ruberic in mark) {
    if (ruberic === "Field1"){
      ruberics.push(["Field1", mark["Field1"]["total"]]);
    }

    if (ruberic === "Field2"){
      ruberics.push(["Field2", mark["Field2"]["total"]]);
    }

    if (ruberic === "Field3"){
      ruberics.push(["Field3", mark["Field3"]["total"]]);
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
         }}
      >
        <Typography variant="body1"  component="h3" sx={{ mb: "15px" }}>
          Ruberic
        </Typography>
        <Typography variant="body1"  component="h3" sx={{ mb: "15px", fontSize: "15px" }}>
          {mark_value}
        </Typography>
      </Box>
      <Box>
        {ruberics.map((item: any[]) => (
          <Input items={item[1]} name={item[0]} key={item[0]}/>
        ))}
      </Box>
    </Box>
  );
}

