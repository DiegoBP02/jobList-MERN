import { useEffect } from "react";
import { Loading, SingleJobList } from "../components";
import { useAppContext } from "../context/appContext";

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, clearValues } = useAppContext();

  useEffect(() => {
    clearValues();
    getJobs();
  }, []);

  const categories = ["Position", "Company", "Date", "Status", "Action"];

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }

  return (
    <>
      <article className="jobs">
        {categories.map((category, index) => {
          return <p key={index}>{category}</p>;
        })}
      </article>
      <section className="jobs-container">
        {jobs.map((job) => {
          return <SingleJobList key={job._id} {...job} />;
        })}
      </section>
    </>
  );
};
export default JobsContainer;
