import { createContext } from "react";

export const KeysContext = createContext({
    keys: [] as string [],
    addKey: (key: string) => {},
    removeKey: (key: string) => {},
    clearKeys: () => {}
})