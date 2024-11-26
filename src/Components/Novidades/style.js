import styled from "styled-components"


export const Section = styled.section`
  display: flex;
  background-color: #1E3932;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  left:0%

   @media (max-width: 768px) { /* Para tablets */
    flex-direction: column; 
    height: auto; 
  }

  @media (max-width: 480px) { /* Para celulares */
    padding: 20px; 
  }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) { /* Para tablets */
    margin-left: 0; 
    min-height: auto; 
  }

  @media (max-width: 480px) { /* Para celulares */
    padding: 10px; 
  }
    
    
`
export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
    color: white;
    text-align:center;

    @media (max-width: 768px) { /* Para tablets */
    width: 60%; /* Ajusta a largura */
  }

  @media (max-width: 480px) { /* Para celulares */
    width: 100%; 
    font-size: 0.9rem; 
  }
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;

  @media (max-width: 768px) { /* Para tablets */
    padding: 8px 25px; 
  }

  @media (max-width: 480px) { /* Para celulares */
    padding: 6px 20px; 
    font-size: 0.8rem; 
  }
`;