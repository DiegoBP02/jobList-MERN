import FormRow from "../components/FormRow";
import { useAppContext } from "../context/appContext";

const FormJobs = () => {
  const { position, company, handleChange, createJob, getJobs, isLoading } =
    useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!company || !position) {
      return;
    }

    await createJob();
    await getJobs();
  };

  const handleInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <section className="form-container">
      <form action="submit" className="form">
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleInput}
          placeholder="Position"
        />
        <FormRow
          type="text"
          name="company"
          value={company}
          handleChange={handleInput}
          placeholder="Company"
        />
        <button
          className="btn btn-hero btn-add"
          type="submit"
          onClick={handleSubmit}
        >
          {isLoading ? "Adding new job..." : "Add job"}
        </button>
      </form>
    </section>
  );
};
export default FormJobs;
