import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleJob";
import { FormRow, FormRowSelect, Navbar } from "../components";
import { useAppContext } from "../context/appContext";

const SingleJob = () => {
  const navigate = useNavigate();
  const {
    company,
    position,
    status,
    statusOptions,
    isEditing,
    editJob,
    handleChange,
    editLoading,
    editAlert,
    clearEditAlert,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position) {
      return;
    }

    if (isEditing) {
      editJob();
      clearEditAlert();
      return;
    }
  };

  const handleInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <div className="btn-container">
          <button
            className="btn btn-hero btn-home"
            onClick={() => navigate("/dashboard")}
          >
            Back Home
          </button>
        </div>
        <section className="job-form">
          {editAlert && <p>Success! Edit complete!</p>}
          <h3>Update Job</h3>
          <form className="form-container" action="submit">
            <FormRow
              type="text"
              name="position"
              value={position}
              handleChange={handleInput}
              label
            />
            <FormRow
              type="text"
              name="company"
              value={company}
              handleChange={handleInput}
              label
            />
            <FormRowSelect
              className="form-select"
              name="status"
              value={status}
              handleChange={handleInput}
              list={statusOptions}
            />
            <button className="btn edit-btn" onClick={handleSubmit}>
              {editLoading ? "Editing..." : "Edit"}
            </button>
          </form>
        </section>
      </div>
    </Wrapper>
  );
};

export default SingleJob;
