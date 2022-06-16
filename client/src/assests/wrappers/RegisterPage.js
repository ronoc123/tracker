import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #fafffb;
  .form-container {
    /* border: 2px solid red; */
    border-top: 0.5rem solid #65b876;
    display: grid;
    width: 40vw;
    height: 55vh;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    position: relative;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 550px;
    min-width: 400px;
    transition: var(--transition);
    text-align: center;
    padding-top: 2rem;
  }

  .form {
    margin-top: -2rem;
    /* border: 2px solid red; */
  }

  .form-row {
    text-align: left;
  }

  .form-container:hover {
    /* transform: scale(1.009); */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  }

  .title {
    text-align: center;
    font-size: 2rem;
    padding-top: 1rem;
  }
  .form-row {
    background-color: transparent;
    display: grid;
    margin: 1rem;
  }

  .form-input {
    border: 1px solid #65b876;
    background: #eafce8;
    border-radius: 0.5rem;
    height: 3.3vh;
    width: 15vw;
    padding-left: 1rem;
    min-height: 1.5rem;
    min-width: 20rem;
  }
  .form-label {
    margin: 0.5rem 0;
    text-transform: capitalize;
  }

  .logo {
    /* position: absolute;
    top: 1.5rem;
    left: 1.5rem; */
  }
  span {
    padding-left: 1.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: #33b121;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-btn {
    height: 3%;
    width: 60%;
    text-transform: uppercase;
    font-weight: 600;
    /* align-self: center; */
    transition: var(--transition);
    margin: 1rem 0;
  }

  .login-btn:hover {
    cursor: pointer;
    background: #18541a;
    transform: scale(1.02);
  }

  .member-btn {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    color: #65b876;
    font-size: 1rem;
    cursor: pointer;
  }

  .alert {
    font-size: 1.2rem;
  }

  .alert-fail {
    background: #eb9683;
    border-radius: 0.5rem;
    color: white;
  }

  .alert-success {
    background: #65b876;
    border-radius: 0.5rem;
    color: white;
  }
`;
export default Wrapper;
