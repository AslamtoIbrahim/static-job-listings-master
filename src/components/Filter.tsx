import { useContext } from "react";
import { KeysContext } from "../store/KeysContext";
import ClearButton from "./ClearButton";
import KeyWord from "./KeyWord";

const Filter = () => {
  const context = useContext(KeysContext);
  const removeWordClick = (value: string) => {
    context.removeKey(value);
  };
  const clearAllWordsClick = () => {
    context.clearKeys()
  };
  return (
    <>
      {context.keys.length !== 0 && (
        <div className="card pd-x shad flex items-center justify-between gap-2 py-4">
          <section className="flex w-full flex-wrap gap-2 lg:gap-4">
            {context.keys.map((k) => (
              <KeyWord key={k} text={k} removeKeyword={removeWordClick} />
            ))}
          </section>
          <section>
            <ClearButton clearAllWords={clearAllWordsClick} />
          </section>
        </div>
      )}
    </>
  );
};

export default Filter;
