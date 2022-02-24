import Box from "@mui/material/Box";
import Form from "./components/Form";
import Reader from "./components/Reader";

function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Reader />
      <Form />
    </Box>
  );
}

export default Home;
