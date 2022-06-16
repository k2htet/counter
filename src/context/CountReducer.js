import { inc, dec, init } from "./CountAction";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: inc(state.count),
      };
    case "DEC":
      return {
        ...state,
        count: dec(state.count),
      };
    case "INIT":
      return {
        ...state,
        count: init(action.payload),
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default countReducer;
