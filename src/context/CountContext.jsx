import { createContext, useReducer, useContext } from "react";
import countReducer from "./CountReducer";

const CountContext = createContext();

export const CountContextProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CountContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
export const useCountContext = () => useContext(CountContext);

export default CountContext;
