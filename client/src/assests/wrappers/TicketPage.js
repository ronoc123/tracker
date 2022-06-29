import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-bottom: 2rem;

  .heading {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* height: 8rem; */
    align-items: end;
  }
  .heading-title {
    justify-self: left;
    font-size: 3rem;
  }

  .heading-btn {
    justify-self: right;
    font-size: 1.1rem;
    transition: var(--transition);
  }

  .heading-btn:hover {
    background: var(--clr-primary-3);
    color: white;
    cursor: pointer;
    transform: scale(1.02);
  }
  .ticket-container {
    height: 98%;
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

  .ticket:nth-child(even) {
    background: #f0eff4;
  }

  .ticket-title,
  .ticket-description,
  .ticket-type,
  .ticket-severity,
  .ticket-status,
  .ticket-dev {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--clr-primary-3);
    margin-left: -1rem;
    border-bottom: 1px solid black;
  }
`;

export default Wrapper;
