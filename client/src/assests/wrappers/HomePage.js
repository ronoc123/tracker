import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6rem auto;
  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 70vw;
    gap: 2rem;
    justify-self: center;
    margin-bottom: 5rem;
  }
  .main-title {
    text-align: center;
    font-size: 3rem;
  }
  .project {
    height: 25rem;
    background: white;
    box-shadow: var(--dark-shadow);
    /* border-bottom: 5px solid black; */
    color: #232b2b;
    transition: var(--transition);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
  }
  .project:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .project-icon {
    position: absolute;
    font-size: 1.5rem;
    left: 0.5rem;
    top: 0.5rem;
  }
  .project-link {
    display: grid;
    align-items: center;
    color: #377523;
    background: #d6ffc9;
    width: 10rem;
    text-align: center;
    height: 4rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  }
  .project-link-all {
    display: grid;
    align-items: center;
    background: #fdffcc;
    color: #8b8000;
    font-size: 1.2rem;
    width: 10rem;
    text-align: center;
    height: 4rem;
    border-radius: 0.5rem;
  }

  .stats-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 1rem;
    gap: 2rem;
    margin-top: 2rem;
    justify-self: center;
    width: 70vw;
  }
  .stat-title {
    justify-self: start;
  }

  .stat {
    background: white;
    box-shadow: var(--dark-shadow);
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-left: 4rem;
    padding-right: 4rem;
    border-bottom: 0.25rem solid black;
    padding-top: 0.5rem;
  }
  .stat-icon {
    font-size: 3rem;
    justify-self: end;
  }
  .stat-amount {
    font-size: 3rem;
    font-weight: 600;
    justify-self: start;
  }
  .icon-container-green {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #d6ffc9;
    color: #377523;
  }
  .icon-container-red {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #ffbcb8;
    color: #871109;
  }
  .icon-container-blue {
    height: 4rem;
    width: 4rem;
    display: grid;
    justify-content: center;
    border-radius: 0.5rem;
    align-items: center;
    background: #c4e5ff;
    color: #345d7d;
  }

  .blue {
    color: #345d7d;
  }
  .green {
    color: #377523;
  }
  .red {
    color: #871109;
  }
  .top-container {
    background: #dcecf9;
  }

  .bottom-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-self: center;
    column-gap: 3rem;
    padding: 0.5rem;
  }

  .project-title {
    position: absolute;
    display: grid;
    align-items: center;
    top: 25%;
    right: 30%;
    /* border: 2px solid red; */
    text-align: center;
    font-size: 1.3rem;
    background: #3b444b;
    padding: 1rem;
    color: white;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
  .project-creator {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding-left: 0.5rem;
    font-size: 1.2rem;
    padding-right: 0.5rem;
    column-gap: 1rem;
    align-items: center;
  }
  .span-title {
    font-size: 1.6rem;
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 1800px) {
    .project-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
    .stats-container {
      display: grid;
      grid-template-columns: 1fr;
      width: 60vw;
      font-size: 0.4rem;
      grid-column-gap: 0rem;
      justify-self: center;
      margin-left: 0rem;
      margin-right: 0rem;
      font-size: 1rem;
    }
    .project-title {
      top: 25%;
      right: 37%;
    }
  }

  @media screen and (max-width: 1400px) {
    .project-title {
      top: 25%;
      right: 30%;
    }
  }

  @media screen and (max-width: 1000px) {
    .project-container {
      display: grid;
      grid-template-columns: 1fr;
    }
    .stats-container {
      display: grid;
      grid-template-columns: 1fr;
      width: 60vw;
      font-size: 0.7rem;
      grid-column-gap: 0rem;
      justify-self: center;
      margin-left: 0rem;
      margin-right: 0rem;
      min-width: 22rem;
    }
    .project-title {
      top: 25%;
      right: 35%;
    }
  }

  @media screen and (max-width: 700px) {
    .project-title {
      top: 25%;
      right: 30%;
    }
  }
`;

export default Wrapper;
