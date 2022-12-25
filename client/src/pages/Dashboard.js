import { FormJobs, JobsContainer } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const { getJobs, clearValues } = useAppContext();
  useEffect(() => {
    clearValues();
    getJobs();
  }, []);

  return (
    <Wrapper>
      <FormJobs />
      <JobsContainer />
    </Wrapper>
  );
};

export default Dashboard;
