import Layout from "../components/Layout";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { backend } from "../../config.json";

const Dashboard = () => {
  const [layouts, setLayouts] = useState([]);
  useEffect(() => {
    axios.post(`${backend}/`).then((res) => {
      setLayouts(res.data);
    });
  }, []);
  return (
    <div className="">
      <Button text="Add Layout" icon={"+"} />
      <div className="max-w-2xl mx-auto mt-10">
        {layouts.map((layout: { id: number; name: string }) => {
          return <Layout key={layout.id} name={layout.name} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
