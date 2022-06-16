import { Stack, Button } from "@mui/material";
import { useCountContext } from "../context/CountContext";

const Buttons = () => {
  const { dispatch } = useCountContext();

  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="outlined"
        color="warning"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Dec
      </Button>
      <Button variant="outlined" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </Button>
      <Button
        variant="outlined"
        color="success"
        onClick={() => dispatch({ type: "INC" })}
      >
        Inc
      </Button>
    </Stack>
  );
};

export default Buttons;
