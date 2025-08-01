import icon from "../../public/sources/images/icon-remove.svg";

type KeywordProps = {
  text: string;
};
const KeyWord = ({ text }: KeywordProps) => {
  return (
    <div className="flex items-center gap-2 rounded word  pl-2">
      <p>{text}</p>
      <div className="cursor-pointer rounded-tr rounded-br bg-green-400 p-2 hover:bg-green-900">
        <img src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default KeyWord;
