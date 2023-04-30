import styled from 'styled-components';


export const CheckoutPage = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: blue;
    max-width: 95vw;
    border-radius: 20px;
    margin: 20px;


    div.botoes {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin: 20px;
    
    button {
      background-color: orange;
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      width: 170px;
      font-weight: 600;
      font-size: 20px;

      
      &:hover {
        background-color: #303f9f;
      }
    }
  }
`

export const CheckouDiv = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;    
    
    
    padding: 1rem;
    background-color: blue;
    max-width: 95vw;
    border-radius: 20px;
    margin-top: 20px;
    

  div.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: white;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 1.4rem;
  }
}
  
  
table {
            width: 90vw;
            border-collapse: collapse;
            margin-bottom: 1rem;
            color: black;
            background-color: grey;
            
            th, td {
              border: 1px solid #ddd;
              padding: 0.5rem;
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
              max-width: 80px;
              height: auto;
            }
            
            table {
              width: 100%;
              margin-bottom: 0;
              background-color: grey;
              
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
