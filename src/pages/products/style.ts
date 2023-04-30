import styled from "styled-components"


export const ProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: column;

  div.loading{
    
    align-items: center;
    margin: 0 auto ;
    min-height: 30vh;
    margin-top: 12.5rem;
  }

aside {
    
  display: flex;
  flex-direction: column;
  font-size: 1.875rem;
  font-weight: 700;
  color: black;
  position: fixed;
  overflow-y: hidden;
  height: 80%;
  top: 4.6875rem;
  width: 13.75rem;
  padding: .625rem;

  label{    
    margin: .625rem;
    padding: .625rem;
    border-radius: .625rem;
    background: linear-gradient(90deg, rgba(6, 206, 6, 1) 0%, rgba(100, 241, 100,0.8465511204481793) 150%);    
    color: white;
  }
  
  input[type="checkbox"] {
  transform: scale(2.0);
  margin: .625rem;
}
}



main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 63vh; 
  margin-left: 15.625rem; 
  text-align: center;  
  align-content: space-evenly;
  align-items: center;
  margin-top: 2.1875rem;
  
  div#container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
 
}

@media only screen and (max-width: 768px) {
  
  aside {
    
    width: 30%;
    top: 3rem;
    left: 0;
    padding: 0;
    margin: 1.875rem 0 auto;
  }
  main {
    margin-left: 20rem;
    margin-top: 1.875rem;
  }
  }




`
export const DivEspecial = styled.div`

    display: flex;
    flex-direction: column;  
    width: 18.75rem;
    height: 23.125rem;
    margin: .625rem;
    margin-bottom: 1.875rem;
    border-radius: 1.25rem 1.25rem 0 0;
    font-family: 'roboto', sans-serif;

h2{
    font-size: 1.875rem;
    margin-bottom: 1.875rem;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    color: white;
         
 } 
 p{
    font-size: 1.25rem;
    margin-top: 1.875rem;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-weight: 400;
 }

 img{
    margin-top: 2.5rem;
    align-self: center;
    width: 15.625rem;
    object-fit: contain;   
    height: 12.5rem;
    align-content: center;
    justify-content: center;
}
button{
    font-family: 'roboto', sans-serif;
    width: 18.75rem;
    font-weight: 600;
    color: black;
    background-color: grey;
    padding: .625rem;
    border: none;
    border-radius: 0 0 1.25rem 1.25rem;
    a{
        font-family: 'roboto', sans-serif;
    }   
}
  button:hover{
  background-color: black;
  color: white;
}
`