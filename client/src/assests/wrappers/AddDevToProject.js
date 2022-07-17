import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;

  .users-assigned-container {
    display: grid;
    width: 50%;
    justify-self: center;
    justify-self: right;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .dev-container {
    justify-self: left;
    width: 80%;
    min-width: 25rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .option-container {
  }
  .search-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .search-btn {
    background: none;
    border: none;
    cursor: pointer;
    align-self: end;
    height: 2rem;
    font-size: 1.1rem;
    background: #d6ffc9;
    color: #377523;
    margin-left: 1rem;
    width: 50%;
    transition: var(--transition);
    border-radius: var(--radius);
    padding-bottom: 0.2rem;
  }

  .search-btn:hover {
    background: #377523;
    color: white;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .form-label {
    align-self: flex-end;
    font-size: 1.2rem;
  }
  .form-input {
    align-self: flex-start;
    height: 2rem;
  }
  .dev-btn {
    background: none;
    border: none;
    display: block;
    cursor: pointer;
  }
`;

export default Wrapper;
