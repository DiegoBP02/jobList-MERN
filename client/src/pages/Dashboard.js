import { FormJobs, JobsContainer } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";

const Dashboard = () => {
  return (
    <Wrapper>
      <FormJobs />
      <JobsContainer />
    </Wrapper>
  );
};

export default Dashboard;
