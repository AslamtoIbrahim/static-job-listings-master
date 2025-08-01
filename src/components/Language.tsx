
type LanguageProps = {
    text: string
}
const Language = ({text}: LanguageProps) => {
  return <div className="word w-fit py-1 px-2">{text}</div>;
};

export default Language;
