import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./Utils/Layout";
import LayoutPage from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./Utils/Protected";
import HireFrame from "./components/HireFrame";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<Protected />}>
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
          <Route path="/hire" element={<HireFrame />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
