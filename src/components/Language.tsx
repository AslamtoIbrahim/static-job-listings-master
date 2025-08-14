import { useContext } from "react";
import { KeysContext } from "../store/KeysContext";

type LanguageProps = {
  text: string;
};
const Language = ({ text }: LanguageProps) => {
  const context = useContext(KeysContext);
  const addkey = () => {
    context.addKey(text)
  };
  return (
    <div
      onClick={addkey}
      className="word w-fit cursor-pointer rounded px-2 py-1 hover:bg-green-400 hover:text-white lg:px-3 lg:py-2 lg:text-base/4"
    >
      {text}
    </div>
  );
};

export default Language;
