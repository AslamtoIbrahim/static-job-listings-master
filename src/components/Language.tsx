
type LanguageProps = {
    text: string
}
const Language = ({text}: LanguageProps) => {
  return <div className="word w-fit py-1 lg:py-2 lg:px-3 px-2 hover:bg-green-400 hover:text-white cursor-pointer rounded">{text}</div>;
};

export default Language;
