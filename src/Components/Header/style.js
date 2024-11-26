import styled from "styled-components";

export const Header1 = styled.header`
display: flex;
align-items: center;
padding: 20px;
height: 10vh;

@media (max-width: 768px) { /* Para tablets */
    justify-content: space-between; 
    padding: 10px; 
  }

  @media (max-width: 480px) { /* Para celulares */
    flex-direction: column; 
    height: auto; 
    padding: 15px; 
  }
`
  

export const Ul = styled.ul`
display: flex;
list-style: none;
margin-left: 695px;
gap: 80px;

 @media (max-width: 768px) { /* Para tablets */
    margin-left: 0; 
    gap: 40px; 
  }

  @media (max-width: 480px) { /* Para celulares */
    flex-direction: column; /
    align-items: center; 
    gap: 20px; 
    margin: 0; 
    width: 100%; 
  }


li {
    a {
      text-decoration: none;
      color: #14764e;
      font-size: 20px;
      transition: color 0.3s;

      &:hover {
        color: palevioletred;
      }

      &.active {
        font-weight: bold;
        color: #007bff;
      
         @media (max-width: 768px) { /* Para tablets */
        font-size: 18px; /* Reduz o tamanho da fonte */
      }

      @media (max-width: 480px) { /* Para celulares */
        font-size: 16px; /* Fonte ainda menor em telas pequenas */
      }
    }
  }
  `;
