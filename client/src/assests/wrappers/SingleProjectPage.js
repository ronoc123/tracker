import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 0.5fr 6fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 2rem;

  .project-container {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    background: var(--clr-primary-1);
    height: 7rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 0.5rem;
  }

  .project-title {
    justify-self: start;
  }
  .ticket-btn {
    justify-self: start;
    align-self: center;
  }

  .ticket-container {
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr;
    overflow: scroll;
    grid-auto-rows: 5rem;
    text-align: start;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-top: 4px solid black;
  }
  .ticket {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 2fr;
    padding-left: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid lightgray;
  }
  .title {
    display: grid;
    grid-template-columns: 1fr 8fr;
    font-size: 1.2rem;
    border-bottom: 1px solid black;
  }
  .title-1 {
    display: grid;
    grid-template-columns: 1fr 8fr;
    font-size: 1.2rem;
  }
  .title-text {
    justify-self: left;
  }

  .ticket:nth-child(even) {
    background: #f0eff4;
  }

  .ticket-title,
  .ticket-description,
  .ticket-type,
  .ticket-severity,
  .ticket-status,
  .ticket-devs {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--clr-primary-3);
    margin-left: -1rem;
    border-bottom: 1px solid black;
  }
  .project-creator {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.75fr 1fr 1fr;
  }

  @media screen and (max-height: 960px) {
    .project-creator {
      grid-template-rows: 0.72fr 1fr 1fr;
    }
  }

  .add-dev {
    justify-self: end;
    align-self: center;
    margin-right: 0.5rem;
    font-size: 0.75rem;
    transition: var(--transition);
  }

  .add-dev:hover {
    font-size: 0.8rem;
    background: var(--clr-primary-1);
    color: black;
  }
`;

export default Wrapper;
