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
`
export const Divcopinhos = styled.div`
cursor: pointer;
display: flex;
justify-content: space-around;
width: 35rem;
position: relative;
left: 5rem;
top: 3rem;
transition: all 0.8s ease;
`
export const Copao = styled.img`
position: absolute;
left: 72%;
z-index: 2;
top: 43%;
width: 350px;

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
`;

