import styled from "styled-components";

export const CreateOrderPage = styled.div`
display: flex;
flex-direction: column;
font-family: 'roboto', sans-serif;
background-color: #f7f7f7;
margin: 0;
align-items: center;
align-content: center;
margin: 20px;
padding: 20px;


div {
display: flex;
flex-direction: column;
background-color: #fff;
width: 70vw;

border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
align-items: center;
h2{

padding: 20px;
font-size: 1.8rem;
margin-bottom: 10px;
}
}

button {
background-color: #007bff;
color: #fff;
border: none;
padding: 10px;
border-radius: 5px;
cursor: pointer;
}



form {
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
font-family: 'roboto', 'sans-serif';
}
label {
    font-size: 1rem;
    color: #222;
    margin-top: 15px;
    margin-bottom: 0.5rem;
    padding-right: 220px;
    color: black;
    font-weight: 600;
    
   
  }
  
  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    padding-left: 15px;
    color: black;
    font-weight: 500;
    width: 300px;
    
    &:focus {
      outline: none;
      border-color: #0077FF;
    }
  }
  

  button {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-right: 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    &:hover {
        background-color: #0057C1;
      }
      
      &:last-child {
        margin-right: 0;
      }
    }   

@media (max-width: 768px) {



}
`;