import styled from "styled-components";

export const Header1 = styled.header`
display: flex;
align-items: center;
padding: 20px;
height: 20vh;
`
  

export const Ul = styled.ul`
display: flex;
list-style: none;
margin-left: 695px;
gap: 80px;


li {
    a {
      text-decoration: none;
      color: #333;
      font-size: 20px;
      transition: color 0.3s;

      &:hover {
        color: #007bff;
      }

      &.active {
        font-weight: bold;
        color: #007bff;
      }
    }
  }`
