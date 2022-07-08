import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
  }
  .ticket-dev-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export default Wrapper;
