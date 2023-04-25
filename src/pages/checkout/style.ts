import styled from 'styled-components';


export const CheckoutPage = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    div.botoes {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin: 20px;
    
    button {
      background-color: #3f51b5;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      
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
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    

  div.title{
    display: flex;
    flex-direction: column;
    align-items: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 1.4rem;
  }
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
      background-color: #f2f2f2;
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
