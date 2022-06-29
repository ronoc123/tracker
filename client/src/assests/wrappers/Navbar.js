import styled from "styled-components";

const Wrapper = styled.nav`
  height: 6rem;
  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr;
  background: var(--clr-primary-3);
  padding-left: 3rem;
  box-shadow: var(--dark-shadow);
  /* border: 2px solid red; */

  .center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border: 2px solid red; */
    padding-left: 2rem;
  }

  span {
    padding-left: 1.5rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--clr-primary-1);
  }

  .nav-link {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    display: flex;
    justify-content: flex-start;
    font-size: 0.8rem;
    /* border: 2px solid red; */
  }

  .icon {
    font-size: 1.5rem;
    padding-top: 0.5rem;
  }

  .link {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    padding-right: 2.5rem;
    gap: 1rem;
    transition: var(--transition);
  }

  .link:hover {
    background: var(--clr-primary-1);
    .icon {
      color: var(--clr-primary-3);
    }
    .text {
      /* color: var(--clr-primary-3); */
      color: black;
    }
  }
  .text {
    color: white;
  }

  .user-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem;
    color: white;
  }

  .item-1 {
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .item-2 {
    display: grid;
    position: relative;
  }
  .profile-link {
    color: white;
  }
  .item-1:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .notification {
    position: absolute;
    top: -0.5rem;
    right: -0.3rem;
    font-size: 0.8rem;
    color: black;
    color: white;
  }

  .item {
    padding-left: 2rem;
  }
  .icon-1 {
    font-size: 2rem;
    color: var(--clr-primary-1);
  }

  .logout-btn {
    width: 6rem;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.2rem;
  }

  .logout-btn:hover {
    transform: scale(1.1);
  }
  .small-screen {
    align-self: center;
    justify-self: end;
    font-size: 2rem;
    margin-left: 2rem;
    transition: var(--transition);
  }

  .small-screen:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    .small-screen {
      display: none;
    }
  }

  @media screen and (max-width: 1600px) {
    .nav-link {
      display: none;
    }
    .user-info {
      display: none;
    }
  }
`;

export default Wrapper;
