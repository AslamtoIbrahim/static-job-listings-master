import { useState } from "react";
import ClearButton from "./ClearButton";
import KeyWord from "./KeyWord";

const Filter = () => {
  const [keys, setKeys] = useState(["frontend", "css", "javascript", "html"]);
  const removeWordClick = (value: string) => {
    setKeys(keys.filter((k) => k !== value));
  };
  const clearAllWordsClick = () => {
    setKeys([]);
  };
  return (
    <>
   {keys.length !== 0 && <div className="card pd-x shad flex items-center justify-between gap-2 py-4 ">
      <section className="flex w-full flex-wrap gap-2 lg:gap-4 ">
        {keys.map((k) => (
          <KeyWord key={k} text={k} removeKeyword={removeWordClick} />
        ))}
      </section>
      <section>
        <ClearButton clearAllWords={clearAllWordsClick} />
      </section>
    </div>}
    </>
  );
};

export default Filter;
