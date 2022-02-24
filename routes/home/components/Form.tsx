// import { Button, FormContainer, Input } from "./Style";
import React, { useState, createContext } from "react";
import Ruberic from "./Ruberic";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface FieldInterface {
  value: number,
  total: number
}

export interface RubericInterface {
  Field1: FieldInterface,
  Field2: FieldInterface,
  Field3: FieldInterface
}

interface AppContextInterface {
  mark: RubericInterface;
  setMark: React.Dispatch<React.SetStateAction<RubericInterface>>;
}

export const FormContext = createContext<AppContextInterface | null>(null);

export default function Form() {

  const rubric: RubericInterface = {
    Field1: {
      value: 0,
      total: 4
    },
    Field2: {
      value: 0,
      total: 4
    },
    Field3: {
      value: 0,
      total: 3
    }
  };

  const [mark , setMark] = useState(rubric);

  const [input, setInput] = useState("");

  const total_value = mark.Field1.value + mark.Field2.value + mark.Field3.value;
  const total_items = mark.Field1.total + mark.Field2.total + mark.Field3.total;

  const total_mark = ((total_value / total_items) * 100).toFixed(2);

  let mark_value = `${total_mark} / 100`;


  const formAppContext: AppContextInterface = {
    mark: mark,
    setMark: setMark
  };

  function submitForm() {
    const data: {} = {
      "ruberics": mark,
      "total_value": total_value,
      "total_items": total_items,
      "mark": total_mark,
      "comment": input
    };

    console.log(data);

  }

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        height: "auto",
        maxWidth: "250px",
        width: "100%"
       }}
    >
      <Box
        sx={{
          marginY: "15px"
        }}
      >
        <Typography variant="body1" gutterBottom component="h3">
          Files
        </Typography>
        <Link 
          href="#"
          sx={{
            textDecoration: "none",
            fontSize: "12px"
          }}
        >
          See History
        </Link>

        <Typography variant="body1" component="p" marginY={1}>
          No files attached
        </Typography>
      </Box>

      <Divider/>

      <Box 
        sx={{
          margin: "20px 0"
        }}
      >
        <Typography variant="body1"  component="h3" sx={{ mb: "15px" }}>
          Mark
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pr: "10px"
          }}
        >
          <Card variant="outlined"
            sx={{
              textDecoration: "none",
              fontSize: "8px",
              textAlign: "right",
              width: "100%",
              mr: "5px"
            }}
          >
              <Typography sx={{ px: "5px", py: "10px" }} color="text.secondary">
                {mark_value}
              </Typography>
            
          </Card>
          <MoreVertIcon/>
        </Box>
      </Box>
      
      <Divider  sx={{ marginY:1 }}/>

      <FormContext.Provider value={formAppContext}>
        <Ruberic />

        <Divider/>

        <Box>
          <Typography variant="body1"  component="h3" sx={{ my: "10px" }}>
            Private Comments
          </Typography>
          <TextField id="outlined-basic" variant="outlined" placeholder="Add private comment.." value={input}
            onInput={(e: any) => setInput(e.target.value)} sx={{ my: "5px" }}/>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "20px"  }}>
            <Button variant="contained" onClick={submitForm} sx={{ backgroundColor: "gray" }}>Post</Button>
          </Box>
        </Box>

        
      </FormContext.Provider>
    </Box>
  );
}

