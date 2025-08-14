import { useReducer } from "react";

type Action =
  | { type: "ADD_KEY"; payload: string }
  | { type: "REMOVE_KEEY"; payload: string }
  | { type: "CLEAR_KEY" };

const reducer = (keys: string[], action: Action) => {
  switch (action.type) {
    case "ADD_KEY":
      return [...new Set([action.payload, ...keys])];
    case "REMOVE_KEEY":
      return keys.filter((k) => k !== action.payload);
    case "CLEAR_KEY":
      return [];
    default:
      return keys;
  }
};

export const useKeys = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const addKey = (key: string) => {
    dispatch({ type: "ADD_KEY", payload: key });
  };

  const removeKey = (key: string) => {
    dispatch({ type: "REMOVE_KEEY", payload: key });
  };

  const clearKeys = () => {
    dispatch({ type: "CLEAR_KEY" });
  };

  const value = {
    keys: state,
    addKey: addKey,
    removeKey: removeKey,
    clearKeys: clearKeys,
  };

  return value;
};
