import styled from "styled-components"


export const ProductsDiv = styled.div`
display: flex;
flex-direction: column;
  justify-content: column;


aside {
    
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 700;
  color: black;
  position: fixed;
  overflow-y: hidden;
  height: 80%;
  top: 75px;
  width: 220px;
  padding: 10px;
  label{
    
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(6, 206, 6, 1) 0%, rgba(100, 241, 100,0.8465511204481793) 150%);
    
    color: white;
  }
  
  input[type="checkbox"] {
  transform: scale(2.0);
  margin: 10px;
  
    
  
 
}
}



main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 200px; 
  text-align: center;  
  align-content: space-evenly;
  align-items: center;
  
  div#container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
 
}




`
export const DivEspecial = styled.div`

    display: flex;
    flex-direction: column;  
    width: 300px;
    height: 370px;
    margin: 10px;
    margin-bottom: 30px;
    border-radius: 20px 20px 0 0;
    font-family: 'roboto', sans-serif;

h2{
    font-size: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    color: white;
         
 } 
 p{
    font-size: 20px;
    margin-top: 30px;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-weight: 400;
 }

 img{
    margin-top: 40px;
    align-self: center;
    width: 250px;
    object-fit: contain;   
    height: 200px;
    align-content: center;
    justify-content: center;
}
button{
    font-family: 'roboto', sans-serif;
    width: 300px;
    font-weight: 600;
    color: black;
    background-color: grey;
    padding: 10px;
    border: none;
    border-radius: 0 0 20px 20px;
    a{
        font-family: 'roboto', sans-serif;
    }   
}
  button:hover{
  background-color: black;
  color: white;
}
`