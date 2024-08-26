import { useEffect, useState } from "react";
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
        { layoutId: 1 },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "6bd5c458-117b-4ab3-a6fe-bfd75aefcd62",
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
          <div className=" font-thin text-sm h-dvh flex items-center justify-center">
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
