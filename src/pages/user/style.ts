import styled from "styled-components";

export const UserDivMaster = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem auto;
max-width: 80%;

h1 {
font-size: 3rem;
font-weight: bold;
color: #222;
margin-bottom: 1rem;
}

p {
font-size: 1.5rem;
color: #777;
margin-bottom: 1rem;
}

form {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
}
label {
    font-size: 1.5rem;
    color: #222;
    margin-bottom: 0.5rem;
  }
  
  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1.5rem;
    
    &:focus {
      outline: none;
      border-color: #0077FF;
    }
  }
  
  button {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #0077FF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #0057C1;
    }
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #0077FF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-right: 1rem;

    &:hover {
        background-color: #0057C1;
      }
      
      &:last-child {
        margin-right: 0;
      }
    }      

    #delete-profile-button {
        background-color: #FF0000;

        &:hover {
            background-color: #C10000;
          }
        }    
        
        #pedido-container {
            width: 100%;
            max-width: 80%;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
            
            th, td {
              border: 1px solid #ddd;
              padding: 0.5rem;
              text-align: center;
            }
            
            th {
              background-color: grey;
              color: #fff;
            }
            
            tbody tr:nth-child(even) {
              background-color: #f2f2f2;
            }
            
            img {
              max-width: 80px;
              height: auto;
            }
            
            table {
              width: 100%;
              margin-bottom: 0;
              
              th, td {
                border: none;
                padding: 10px;
                text-align: center;
              }
              
              th {
                font-weight: bold;
              }
              
              td {
                img {
                  max-width: 50px;
                }
              }
            }
          }
          
`;
