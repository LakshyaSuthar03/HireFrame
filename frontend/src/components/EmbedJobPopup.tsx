import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.min.css"; // Import your chosen theme
import { MdContentCopy } from "react-icons/md";

hljs.registerLanguage("javascript", javascript);

type EmbedJobPopUpProps = {
  closeEmbedJobPopup: (open: boolean) => void;
  layoutId: string | number;
  apiKey: string;
};

const EmbedJobPopup = ({
  closeEmbedJobPopup,
  layoutId,
  apiKey,
}: EmbedJobPopUpProps) => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const [code, setCode] = useState("");
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard");
  };
  useEffect(() => {
    const codeToHighlight = `import { useEffect, useState } from "react";
import axios from "axios";

interface IJobs {
  id: number;
  title: string;
  experience_range: string;
  // openings: number;
}

const HireFrame = () => {
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const customize = {
    containerColor: "#F7F6F7",
    buttonColor: "#2F2F2F",
    fontColor: "#000000",
    buttonTextColor: "#FFFFFF",
    jobBackgroundColor: "#ffffff",
  };

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/api/hireframe/embed",
        { layoutId: ${layoutId} },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "${apiKey}",
          },
        }
      )
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="w-full sm:w-3/4 min-h-96 rounded-md relative border-2 border-solid border-gray-300 m-auto mt-5 font-[2rem] p-4"
      style={{ backgroundColor: customize.containerColor }}
    >
      <div className="pt-10">
        {jobs.length === 0 ? (
          <div className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 text-center font-thin text-sm">
            No Jobs Posted Yet! Add jobs
          </div>
        ) : (
          jobs.map((job) => (
            <div
              className="w-full sm:w-4/5 h-10 mx-auto rounded-2xl mb-4 flex justify-between items-center px-5 text-xs sm:text-sm"
              key={job.id}
              style={{
                backgroundColor: customize.jobBackgroundColor,
                color: customize.fontColor,
              }}
            >
              <div>Position: {job.title}</div>
              <div>Exp: {job.experience_range}</div>
              <div>
                <button
                  className="px-2 py-1 rounded-2xl flex items-center gap-1 ml-auto text-xs sm:text-sm"
                  style={{
                    backgroundColor: customize.buttonColor,
                    color: customize.buttonTextColor,
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/2 text-xs sm:text-[12px] px-2 rounded-md"
        style={{
          backgroundColor: customize.buttonColor,
          color: customize.buttonTextColor,
        }}
      >
        HIREFRAME
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
    <div className="w-3/5 px-3 py-2">
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
