import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .ticket-dev-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
  }
  .ticket-container {
    background: white;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    font-size: 1.2rem;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr 1fr;
  }
  .text-ticket {
    font-size: 1.1rem;
    font-weight: normal;
  }
  .dev-container {
    margin-top: 1rem;
    background: white;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto;
  }

  .dev-names {
  }

  .add-devs {
  }

  .form-row-devs {
    height: 1.8rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }
  .devs-btn {
    background: none;
    border: 1px solid grey;
    cursor: pointer;
    font-size: 1rem;
  }

  .single-dev-name {
    text-transform: capitalize;
  }

  .dev-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .dev-names {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 2rem;
  }
  .comment-container {
    display: grid;
    grid-template-rows: 0.5fr 1fr 8fr;
    background: white;
    padding: 1rem;
    margin-left: 1rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    max-height: 48.5rem;
  }
  .comment {
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    overflow-x: hidden;
    grid-auto-rows: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .comment-creator {
    font-weight: bold;
  }
  .comment-date {
    color: #525252;
  }
  .form-label {
    background: #ed9702;
    text-align: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    text-transform: capitalize;
    color: white;
    font-weight: 600;
  }
  .form-input {
    height: 2rem;
    border: none;
    border-bottom: 1px solid lightgrey;
    padding-left: 0.25rem;
  }

  .form-input:focus {
    border: none;
    border-bottom: 1px solid black;
  }

  .form-row {
    display: grid;
    grid-template-columns: 50px 11fr 2fr;
    height: 50px;
    column-gap: 1rem;
  }

  .comment-btn {
    background: none;
    border: 1px solid lightgrey;
    height: 3rem;
    width: 100%;
    padding-bottom: 0.2rem;
    align-self: center;
    justify-self: center;
    cursor: pointer;
  }

  .comment-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .single-comment {
  }
`;

export default Wrapper;
