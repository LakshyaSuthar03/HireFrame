import Layout from "../components/Layout";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <div className="">
      <Button text="Add Layout" icon={"+"} />
      <div className="max-w-2xl mx-auto mt-10">
        <Layout />
        <Layout />
        <Layout />
      </div>
    </div>
  );
};

export default Dashboard;
