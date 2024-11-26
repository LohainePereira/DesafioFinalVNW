import styled from "styled-components"

export const Mainstyle = styled.main`
display: flex;
flex-direction: column;
align-items: flex-start;

h2{
font-size: 3.5rem;
margin: 0;

 span{
 font-size: 4rem;
 color: #037143;
}
}
  h2 + h2 {
    margin-top: -10px; 
  }

}

 p {
  margin-top: 10px;  
  max-width: 600px; 
  text-align: justify; 
  line-height: 1.5; 
  letter-spacing: -0.5px;  
  font-size: 1.2rem; 
  color: black;

  @media (max-width: 768px) {
      font-size: 1rem;
      max-width: 80%; /* Reduz o tamanho para tablets */
    }

    @media (max-width: 480px) {
      font-size: 0.9rem; /* Reduz ainda mais para celulares */
      max-width: 90%;
    }
  }

 button {
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
      padding: 8px 25px;
    }

    @media (max-width: 480px) {
      padding: 6px 20px;
      font-size: 0.8rem;
    }
`;
export const Divcopinhos = styled.div`
cursor: pointer;
display: flex;
justify-content: space-around;
width: 35rem;
position: relative;
left: 5rem;
top: 3rem;
transition: all 0.8s ease;

@media (max-width: 768px) {
    width: 90%;
    justify-content: space-between;
    left: 0;
    top: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Empilha os itens em celulares */
    align-items: center;
    width: 100%;
  }
`
export const Copao = styled.img`
position: absolute;
left: 72%;
z-index: 2;
top: 43%;
width: 350px;

@media (max-width: 768px) {
    width: 250px;
    left: 60%;
    top: 40%;
  }

  @media (max-width: 480px) {
    width: 200px;
    left: 50%;
    top: 35%;
  }
`;

export const Fundo = styled.img`
 position: absolute;
  z-index: 1; 
  left: 82.8%;
  transform: translateX(-50%);
  visibility: visible;
  transition: transform 0.3s ease;
  width: 469px;
  top:37.5%;

   @media (max-width: 768px) {
    width: 300px;
    left: 75%;
    top: 35%;
  }

  @media (max-width: 480px) {
    width: 250px;
    left: 70%;
    top: 30%;
  }
`;

