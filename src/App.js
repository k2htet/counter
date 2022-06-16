import { useState } from "react";
import { Stack, TextField, Button, Box, Typography } from "@mui/material";
import Buttons from "./components/Buttons";
import { useCountContext } from "./context/CountContext";

const App = () => {
  const { count, dispatch } = useCountContext();
  const [input, setInput] = useState(0);

  return (
    <Stack
      sx={{ width: "100%", height: "100vh" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h5" color="primary" mb={3} textAlign="center">
        Learning State Management <br />
        (useReducer + useContext and Clean Code)
      </Typography>
      <Box
        border="1px solid gray"
        p={10}
        sx={{
          boxShadow: "10px 10px 5px 0px rgba(173,173,173,1)",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center" }}
          mb="20px"
          color="primary"
        >
          {count}
        </Typography>
        <Stack direction="row" mb={3}>
          <TextField
            variant="standard"
            label="Initialize"
            size="small"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setInput(0);
              return dispatch({
                type: "INIT",
                payload: input,
              });
            }}
          >
            Initialize
          </Button>
        </Stack>

        <Buttons />
      </Box>
    </Stack>
  );
};

export default App;
