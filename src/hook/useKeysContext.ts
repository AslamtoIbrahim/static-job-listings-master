import { use } from "react";
import { KeysContext } from "../store/KeysContext";

export const useKeysContext = () => {
  const context = use(KeysContext);
  if (!context) {
    throw new Error("❌ useKeysContext must be used within a KeysContextProvider");
  }
  return context;
};
