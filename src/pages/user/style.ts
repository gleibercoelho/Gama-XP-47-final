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
margin-top: 2rem;
font-family: 'roboto', 'sans-serif';
}
label {
    font-size: 1.5rem;
    color: #222;
    margin-top: .9375rem;
    margin-bottom: .5rem;
    padding-right: 13.75rem;
    color: black;
    font-weight: 600;
   
  }
  
  input {
    padding: .5rem;
    margin-bottom: 1rem;
    border: .125rem solid #ccc;
    border-radius: .3125rem;
    font-size: 1.5rem;
    padding-left: .9375rem;
    color: black;
    font-weight: 500;
    
    &:focus {
      outline: none;
      border-color: #0077FF;
    }
  }
  
  button {
    padding: .5rem 2rem;
    font-size: 1.5rem;
    background-color: orange;
    color: black;
    border: none;
    border-radius: .3125rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #0057C1;
    }
  }
  button {
    padding: .5rem 2rem;
    font-size: 1.5rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: .3125rem;
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
            width: 90vw;
            border-collapse: collapse;
            margin-bottom: 1rem;
            color: black;
            
            th, td {
              border: .0625rem solid #ddd;
              padding: .5rem;
              text-align: center;
              
            }
            
            th {
              background-color: grey;
              color: #fff;
              background-color: black;
              position: sticky;
              top: 0;
            }
            
            tbody tr:nth-child(even) {
              background-color: #f2f2f2;
            }
            
            img {
              max-width: 5rem;
              height: auto;
            }
            
            table {
              width: 100%;
              margin-bottom: 0;
              background-color: grey;
              
              th, td {
                border: none;
                padding: .625rem;
                text-align: center;
              }
              
              th {
                font-weight: bold;
              }
              
              td {
                img {
                  max-width: 3.125rem;
                }
              }
            }
          }
          

@media only screen and (max-width: 75rem)  {
  
 
    max-width: 90%;
    div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    

}
   
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.25rem;
  }

   form label {
    font-size: 1.25rem;
    padding-right: 6.875rem;
  }

  form input {
    font-size: 1.25rem;
    padding-left: 0.625rem;
  }

   form button {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }

   form button:last-child {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
}
`;
