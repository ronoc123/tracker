import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 50vw;
    height: 50vh;
    background: var(--clr-primary-3);
    display: grid;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 5fr 1fr;
    padding: 2rem;
    padding-left: 4rem;
    min-height: 30rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 0.5rem;
    transition: var(--transition);
  }

  .form-container:hover {
    transform: scale(1.01);
  }
  .title {
    text-align: center;
    justify-self: center;
    font-size: 3rem;
  }

  .form-row {
    display: grid;
    font-size: 1.5rem;
    text-align: center;
  }

  .form-label {
    font-size: 2rem;
    text-transform: capitalize;
  }
  .form-input {
    height: 2rem;
    width: 40%;
    justify-self: center;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .create-btn {
    justify-self: center;
    width: 40%;
    font-size: 1.5rem;
    transition: var(--transition);
  }

  .create-btn:hover {
    background: var(--clr-primary-1);
    color: black;
    cursor: pointer;
    transform: scale(1.02);
  }
  .description {
    height: 5rem;
  }
  .form-input {
    padding-left: 0.5rem;
  }

  .alert {
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    .create-btn {
      font-size: 1rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .form-label {
      font-size: 1.2rem;
    }
    .form-input {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;
