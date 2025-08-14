import icon from "../../public/sources/images/icon-remove.svg";

type KeywordProps = {
  text: string;
  removeKeyword: (value: string) => void;
};
const KeyWord = ({ text, removeKeyword }: KeywordProps) => {
  return (
    <div className="word flex items-center gap-2 rounded pl-2 lg:gap-3 lg:pl-3 ">
      <p>{text}</p>
      <div
        onClick={() => removeKeyword(text)}
        className="cursor-pointer rounded-tr rounded-br bg-green-400 p-2 hover:bg-green-900  "
      >
        <img src={icon} alt="icon remove" className="size-2 lg:size-3" />
      </div>
    </div>
  );
};

export default KeyWord;
