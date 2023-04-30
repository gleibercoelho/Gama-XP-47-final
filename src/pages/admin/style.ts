import styled from "styled-components";

export const AdminDivMaster = styled.div`

    display: flex;
    flex-direction: column;
    font-family: 'roboto', sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    

    img {
              max-width: 80px;
              height: auto;
            }

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}



aside {
  background-color: #007bff;  
  padding: 20px;
  
  
  
 
  ul {
    
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;   
    color: black !important;
    justify-content: space-evenly;
  
}

li {
  
  margin-bottom: 10px;
  color: black;
  font-weight: 500;
  cursor:pointer;
  
}
}

main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  h2{
   
    padding: 20px;
    
  }
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

a {
  
  text-decoration: none;
}

a:hover {
  opacity: 0.8;
  
 
}

a.active {
  
  color: white;
 transform: scale(1.2);
 font-weight: 700;
 cursor: default;
}

@media (max-width: 768px) {
 

  
}
`;