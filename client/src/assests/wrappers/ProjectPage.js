import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 2rem;

  .title {
    justify-self: center;
    font-size: 3rem;
    width: 35vw;
    font-weight: 500;
  }

  .btn-container {
    position: absolute;
    right: 5.8rem;
    bottom: 4.5rem;
  }

  .create-btn {
    font-size: 1.2rem;
    transition: var(--transition);
    background: #c2dfe3;
    padding-bottom: 0.8rem;
    font-weight: 580;
  }
  .create-btn:hover {
    background: black;
    color: white;
    cursor: pointer;
    transform: scale(1.02);
  }

  .project-container {
    background: white;
    height: 68vh;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    grid-auto-rows: 4rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    border-top: 4px solid black;
  }

  .project:nth-child(even) {
    background: #f0eff4;
  }
  .project:nth-child(odd) {
    background: white;
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
    color: black;
    margin-left: -1rem;
    padding-left: 0.6rem;
  }

  /* .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } */
  .edit-btn {
  }

  .delete-btn {
    background: var(--clr-primary-1);
    padding-top: 0.3rem;
    align-self: start;
    font-size: 1rem;
    border: none;
    width: 4rem;
    background: none;
    justify-self: start;
    text-align: left;
    color: black;
    border: none;
    cursor: pointer;
    margin-top: 0.2rem;
    color: red;
  }
  .trash-icon {
    color: #871109;
    margin-top: 0.5rem;
    opacity: 0.7;
    cursor: pointer;
    align-self: start;
    margin-top: 0.3rem;
    transition: var(--transition);
  }
  .trash-icon:hover {
    transform: scale(1.05);
    color: red;
  }
  .ticket-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin-right: 3rem;
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
