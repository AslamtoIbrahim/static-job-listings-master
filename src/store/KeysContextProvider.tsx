import type { ReactNode } from "react";
import { useKeys } from "../hook/useKeys";
import { KeysContext } from "./KeysContext";
import type { KeyContext } from "../utils/types";



export const KeysContextProvider = ({ children }: { children: ReactNode }) => {
  const value: KeyContext = useKeys();

  return <KeysContext value={value}>{children}</KeysContext>;
};

export default KeysContextProvider;
