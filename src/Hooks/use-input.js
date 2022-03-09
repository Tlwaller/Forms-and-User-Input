import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.payload, isTouched: state.isTouched };

    case "BLUR":
      return { isTouched: true, value: state.value };

    case "RESET":
      return { isTouched: false, value: "" };

    default:
      break;
  }

  return inputStateReducer;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validate(inputState.value);
  const hasError = inputState.isTouched && !valueIsValid;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", payload: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    isTouched: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
