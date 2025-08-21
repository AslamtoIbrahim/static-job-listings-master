import type { ReactNode } from "react";
import { useKeysReducer } from "../hook/useKeysReducer";
import { KeysContext } from "./KeysContext";
import type { KeyContext } from "../utils/types";



export const KeysContextProvider = ({ children }: { children: ReactNode }) => {
  const value: KeyContext = useKeysReducer();

  return <KeysContext value={value}>{children}</KeysContext>;
};

export default KeysContextProvider;
