import ReactMarkdown from "react-markdown";
const RichText = ({ content }) => {
  return (
    <>
      <div className="prose textarea h-40 overflow-y-auto textarea-sm w-full max-w-full textarea-bordered pb-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};
ReactMarkdown.defaultProps = {
  content: "",
};
export default RichText;
