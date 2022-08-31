import styled from "styled-components";


export const NavStyles = styled.nav`
  padding: 0 12%;
  background-color: #150f0f;
  min-height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #303030;
  a {
    font-size: 1.5rem;
    color: chocolate;
    Font-weight: bold;
  }
`;



export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    color: #fff;
   font-size: 0.75rem;
   padding: 0.25rem;
  }
  svg {
    font-size: 1.5rem
  }
  span {
    background: #ff2626;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
     position: absolute;
     right: -10%;
     top: -20%;
     pointer-events: none;
  }
`;