import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 2rem;

  .form-container {
    height: 25rem;
    background: white;
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
  }
  .input-container {
    display: grid;
    align-items: center;
    justify-content: left;
    width: 20vw;
    min-width: 25rem;
  }
  .form-row {
    display: grid;
  }
  .title {
    text-align: center;
    margin-top: 1rem;
  }
  .form-label {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .form-input {
    width: 25rem;
    height: 1.5rem;
    font-size: 1.1rem;
    padding-left: 0.2rem;
  }
  .form-select {
    height: 1.5rem;
  }
  .create-btn {
    margin-top: 1rem;
    width: 50%;
    justify-self: center;
    transition: var(--transition);
    cursor: pointer;
  }
  .create-btn:hover {
    transform: scale(1.05);
  }
`;

export default Wrapper;
