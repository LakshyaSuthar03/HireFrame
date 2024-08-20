import ToggleSwitch from "./ToggleSwitch";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  name: string;
  id: number;
}

const Layout = ({ name, id }: LayoutProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between  bg-[var(--secondary)] px-10 py-1 items-center rounded-2xl mb-4 cursor-pointer"
      onClick={() => navigate(`/layout/${id}`)}
    >
      <div>{name}</div>
      <div className="flex items-center space-x-3">
        <button className="bg-[var(--tertiary)] px-3 py-1 rounded-lg text-[var(--secondary)]">
          EDIT
        </button>

        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Layout;
