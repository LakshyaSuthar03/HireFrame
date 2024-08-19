import ToggleSwitch from "./ToggleSwitch";

const Layout = () => {
  return (
    <div className="flex justify-between  bg-[var(--secondary)] px-10 py-1 items-center rounded-2xl mb-4">
      <div>XYZ.com</div>
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
