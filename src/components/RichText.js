import ReactMarkdown from "react-markdown";
const RichText = ({ content }) => {
  return (
    <>
      <div className="prose textarea h-60 max-h-96 overflow-y-auto textarea-sm w-full textarea-bordered pb-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default RichText;
