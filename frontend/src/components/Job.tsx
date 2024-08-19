import ToggleSwitch from "./ToggleSwitch";

interface JobProps {
  role: string;
  exp: string;
  openings: number;
  newApplications?: number;
}

const Job = ({
  role,
  exp,
  openings,
  newApplications,
}: JobProps): JSX.Element => {
  return (
    <div className="p-3 relative bg-[var(--secondary)] h-28 min-w-52 rounded-2xl cursor-pointer">
      <div className="text-sm">
        <p>Role: {role}</p>
        <p>Exp: {exp}</p>
        <p>Openings: {openings}</p>
      </div>
      <div className="ml-auto w-max ">
        <ToggleSwitch />
      </div>
      {newApplications && (
        <div className="bg-[var(--active)] w-5 h-5 flex items-center justify-center rounded-full absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
          <span>{newApplications}</span>
        </div>
      )}
    </div>
  );
};

export default Job;
