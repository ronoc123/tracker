import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 6fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 2rem;

  .title {
    justify-self: center;
    font-size: 3rem;
    border-bottom: 2px solid black;
    width: 35vw;
  }

  .btn-container {
    justify-self: left;
  }

  .create-btn {
    font-size: 1.1rem;
    transition: var(--transition);
  }
  .create-btn:hover {
    background: var(--clr-primary-3);
    color: white;
    cursor: pointer;
    transform: scale(1.02);
  }

  .project-container {
    height: 68vh;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    grid-auto-rows: 5rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-top: 4px solid black;
  }

  .project:nth-child(even) {
    background: #f0eff4;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr;
    padding-left: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
  }

  .project-title,
  .project-description,
  .project-creator,
  .project-links {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--clr-primary-3);
    margin-left: -1rem;
    padding-left: 0.6rem;
  }

  @media screen and (max-width: 1100px) {
    .project {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-left: 1rem;
      font-size: 1.2rem;
    }
    .project-container {
      height: 90vh;
    }
    .big-screen {
      display: none;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
