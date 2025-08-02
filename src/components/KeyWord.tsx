import icon from "../../public/sources/images/icon-remove.svg";

type KeywordProps = {
  text: string;
};
const KeyWord = ({ text }: KeywordProps) => {
  return (
    <div className="word flex items-center gap-2 lg:gap-3 2xl:gap-4 rounded pl-2 lg:pl-3 2xl:pl-4 ">
      <p>{text}</p>
      <div className="cursor-pointer rounded-tr rounded-br bg-green-400 p-2 lg:p-3 2xl:p-4 hover:bg-green-900">
        <img src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default KeyWord;
