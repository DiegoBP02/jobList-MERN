import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

const SharedLayout = () => {
  return (
    <>
      <main className="dashboard">
        <Navbar />
        <div className="dashboard-page">
          <Dashboard />
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
