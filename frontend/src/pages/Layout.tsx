import Job from "../components/Job";
import Button from "../components/Button";
const Layout = () => {
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
        <Job role="SDE" exp="2-4 Y" openings={2} newApplications={2} />
        <Job role="SDE" exp="2-4 Y" openings={2} />
        <Job role="SDE" exp="2-4 Y" openings={2} newApplications={1} />
      </div>
    </div>
  );
};

export default Layout;
