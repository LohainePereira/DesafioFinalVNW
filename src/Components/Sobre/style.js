import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  color: #14764e;

   @media (max-width: 768px) {
    flex-direction: column; 
    height: auto; 
    padding: 20px; 
  }
`;

export const Div = styled.div`
width: 30vw;

h2{
    font-size: 3rem;
  
}

 @media (max-width: 768px) {
    width: 90%; 
    text-align: center;
    h2 {
      font-size: 28px; 
    }
  }
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #025b36; 
    transform: scale(1.05); 
  }

  &:focus {
    outline: 2px solid #025b36; 
  }

  @media (max-width: 768px) {
    padding: 15px 40px; 
  }
`;