import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.min.css"; // Import your chosen theme
import { MdContentCopy } from "react-icons/md";

hljs.registerLanguage("javascript", javascript);

type EmbedJobPopUpProps = {
  closeEmbedJobPopup: (open: boolean) => void;
};

const EmbedJobPopup = ({ closeEmbedJobPopup }: EmbedJobPopUpProps) => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [code, setCode] = useState("");
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard");
  };
  useEffect(() => {
    const codeToHighlight = `import axios from "axios";
const HireFrame = () => {
  const apiKey = "YOUR_API_KEY";
  const customize = {
    containerColor: "#F7F6F7",
    buttonColor: "#2F2F2F",
    fontColor: "#000000",
    buttonTextColor: "#FFFFFF",
    jobBackgroundColor: "#ffffff",
  };

  return (
    <div
      className="w-3/4 min-h-96 rounded-md m-auto mt-5"
      style={{ backgroundColor: customize.containerColor }}
    >
      <div className="pt-10">
        <div
          className="w-4/5 h-10 mx-auto rounded-2xl mb-4 flex text-sm justify-between items-center px-5"
          style={{
            backgroundColor: customize.jobBackgroundColor,
            color: customize.fontColor,
          }}
        >
          <div>Position: SDE</div>
          <div>Exp: 2-4 Y</div>
          <div>
            <button
              className="px-2 py-1 rounded-2xl flex items-center gap-1 ml-auto"
              style={{
                backgroundColor: customize.buttonColor,
                color: customize.buttonTextColor,
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireFrame;
`;
    setCode(codeToHighlight);
    const highlighted = hljs.highlight(codeToHighlight, {
      language: "javascript",
    }).value;
    setHighlightedCode(highlighted);
  }, []);

  return (
    <div className="w-3/5px-3 py-2">
      <div
        className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
        onClick={() => closeEmbedJobPopup(false)}
      >
        <IoCloseOutline size={24} />
      </div>
      <div className="h-96 ">
        <pre className=" p-4 relative">
          <div
            className="absolute right-0 mr-4 text-white pr-3 pt-3 cursor-pointer"
            onClick={handleCopyToClipboard}
          >
            <MdContentCopy />
          </div>
          <code
            className="hljs rounded-md"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
};

export default EmbedJobPopup;
