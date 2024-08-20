import Job from "../components/Job";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../../config.json";

interface IJobs {
  role: string;
  exp: string;
  openings: number;
  newApplications: number;
}

const Layout = () => {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`${backend}/job/`, { layoutId: id })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleAddJob = () => {
    // Add Job
  };

  return (
    <div className="mt-10">
      <div className="flex w-max ml-auto gap-2">
        <div>
          <Button text="Embed" icon="</>" />
        </div>
        <div>
          <Button text="Add Job" icon="+" />
        </div>
      </div>
      <div className="h-28 min-w-48 rounded-2xl mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.length === 0 ? (
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-center font-thin text-sm">
            No Jobs Posted Yet! Add jobs
          </div>
        ) : (
          jobs.map((job) => {
            return (
              <Job
                role={job.role}
                exp={job.exp}
                openings={job.openings}
                newApplications={job?.newApplications}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Layout;
