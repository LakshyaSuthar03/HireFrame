import axios from "axios";
import { useEffect } from "react";
const HireFrame = () => {
  const apiKey = "YOUR_API_KEY";
  const customize = {
    containerColor: "#F7F6F7",
    buttonColor: "#2F2F2F",
    fontColor: "#000000",
    buttonTextColor: "#FFFFFF",
    jobBackgroundColor: "#ffffff",
  };
  useEffect(() => {
    // write api key check logic in middleware, store api key to user db, send layout id to controller and send jobs present in that layout
    axios
      .post(
        "http://localhost:3001/api/hireframe/embed",
        { layoutId: 1 },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="w-3/4 min-h-96 rounded-md relative border-2 border-solid border-gray-300 m-auto mt-5"
      style={{ backgroundColor: customize.containerColor }}
    >
      <div className="pt-10 ">
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
      <div
        className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/2 text-[12px] px-2 rounded-md"
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
