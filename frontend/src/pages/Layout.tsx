import Job from "../components/Job";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../../config.json";
import AddJobPopup from "../components/AddJobPopup";
import EmbedJobPopup from "../components/EmbedJobPopup";

interface IJobs {
  title: string;
  experience_range: string;
  // openings: number;
  newApplications?: number;
}

const Layout = () => {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [showJobPopup, setShowJobPopup] = useState<boolean>(false);
  const [showEmbedPopUp, setShowEmbedPopUp] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`${backend}/job/`, { layouts_id: id })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="mt-10 ">
      <div className="flex w-max  ml-auto gap-2">
        <div onClick={() => setShowEmbedPopUp(true)}>
          <Button text="Embed" icon="</>" />
        </div>
        <div onClick={() => setShowJobPopup(true)}>
          <Button text="Add Job" icon="+" />
        </div>
      </div>
      <div className="h-28 min-w-48 rounded-2xl mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.length === 0 ? (
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-center font-thin text-sm">
            No Jobs Posted Yet! Add jobs
          </div>
        ) : (
          jobs.map((job, index) => (
            <Job
              key={index}
              title={job.title}
              exp={job.experience_range}
              // openings={job.openings}
              // newApplications={job?.newApplications}
            />
          ))
        )}
      </div>
      {showJobPopup && (
        <div className="w-screen h-screen bg-[var(--primary)] absolute top-0 right-0 flex items-center justify-center">
          <AddJobPopup closeAddJobPopupState={setShowJobPopup} />
        </div>
      )}
      {showEmbedPopUp && (
        <div className="w-screen h-[1440px] bg-[var(--primary)] absolute top-0 right-0 flex justify-center">
          <EmbedJobPopup closeEmbedJobPopup={setShowEmbedPopUp} />
        </div>
      )}
    </div>
  );
};

export default Layout;
