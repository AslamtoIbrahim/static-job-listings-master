import { createContext } from "react";

export const KeysContext = createContext({
    keys: [] as string [],
    addKey: (_key: string) => {},
    removeKey: (_key: string) => {},
    clearKeys: () => {}
})