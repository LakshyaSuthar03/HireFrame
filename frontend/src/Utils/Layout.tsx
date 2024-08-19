import Navbar from "../components/Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh w-svh bg-[var(--primary)]">
      <Navbar />
      <div className="w-4/5 mx-auto ">{children}</div>
    </div>
  );
};

export default Layout;
