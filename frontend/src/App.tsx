import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./Utils/Layout";
import LayoutPage from "./pages/Layout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/layout/:id"
          element={
            <Layout>
              <LayoutPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
