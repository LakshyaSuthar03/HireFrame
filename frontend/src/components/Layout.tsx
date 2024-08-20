import ToggleSwitch from "./ToggleSwitch";

interface LayoutProps {
  name: string;
}

const Layout = ({ name }: LayoutProps) => {
  return (
    <div className="flex justify-between  bg-[var(--secondary)] px-10 py-1 items-center rounded-2xl mb-4">
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
