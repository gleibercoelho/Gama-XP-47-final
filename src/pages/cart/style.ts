import styled from "styled-components";



export const DivMasterCart = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  font-family: 'roboto', sans-serif;
  margin: 20px;

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    p{
      font-size: 30px;
      margin: 20px;
      color: red;
    }

 
  }

  h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
    color: black;
    font-weight: 700;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  table th,
  table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

table tbody tr:hover {
  background-color: #e1e1e1;
}

  table th {
    font-weight: bold;
    color: #333;
  }

  table td {
    color: #666;
  }

  table td button {
    background-color: black;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin: 0 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  table td button:hover {
    background-color: #d32f2f;
  }

  .total {
    
    font-weight: bold;
    text-align: right;
    color: red;
    
  }
  tfoot{
    
  }

  form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-family: 'roboto', sans-serif;

    p{
      color: red;
      margin-left: 20px;
    }
    
    p.rightCupom{
      color: rgb(37, 190, 68);
      margin-left: 20px;
    }
    button{
      background-color: rgb(37, 190, 68);
      color: white;
      font-weight: 600;
      font-family: 'roboto', sans-serif;
    }
  }

  label {
    margin-right: 20px;
    font-size: 1.2rem;
  }

  input {
    width: 150px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 1rem;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #388e3c;
  }

  p {
    color: #f44336;
    font-weight: bold;
  }

  .keep-shopping {
    text-align: center;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
    
  }

  .keep-shopping button {
    
    flex-wrap: nowrap;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .keep-shopping button:hover {
    background-color: pink;
  }

  .keep-shopping a{
    flex-wrap: nowrap;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
  }
  .keep-shopping a:hover {
    background-color: pink;
    
  }

  button.backStore{
    background-color: blue;
    color: white;
    font-family: 'roboto', sans-serif;
    font-weight: 600;
  }

  img{
    width:50px;
  }
`;
