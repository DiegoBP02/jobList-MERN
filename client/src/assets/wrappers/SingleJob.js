import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .btn-container {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  .btn-home {
    width: 100%;
    font-size: 1rem;
    height: 35px;
  }
  .job-form {
    background-color: white;
    padding: 2rem;
    border-radius: var(--borderRadius);
  }
  .job-form h3 {
    text-align: center;
  }
  .form-container {
    display: grid;
    align-items: center;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-row {
    input:focus {
      outline: none;
      border: 1.75px solid var(--primary);
    }
  }
  .edit-btn {
    align-self: flex-end;
    height: 100%;
  }
  .form-select {
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    .form-container {
      grid-template-columns: 1fr 1fr 100px auto;
      column-gap: 0.5rem;
    }
    .btn-home {
      width: 13rem;
    }
    .job-form h3 {
      text-align: start;
    }
    .edit-btn {
      height: 50%;
    }
    .form-select {
      width: 100%;
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
