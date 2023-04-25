import styled from "styled-components";


export const DivMaster = styled.div`

    display: flex;
    flex-direction: row;
    background-color: pink;
    margin: 30px;   
    padding: 50px;
    
    div.infoDiv{
      background-color: white;
      border-radius: 10px;
      border: 1px solid black; 
      height: 500px;
        h2{
          font-size: 60px;
          text-align: center;
          margin-bottom: 60px;
          color: #551a8b;
          }
        p{
        text-align: justify;
        padding: 0 50px;
        }
        div.priceDiv{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;      
          height: 100px;
          margin-top: 30px;
          font-weight: 600;

          button{

            
            background-color: red;       
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            border: 1px solid black;
            color: white;
            font-weight: 600;
            border-radius: 10px;        
            text-align: center;
            font-size: 20px;
            padding: 10px 10px;
            height: 45px;
            margin: 20px 5px;

            
            }

            button:hover{
              opacity: 0.8;
              transform: scale(1.1);

            }
            button:active {
              transform: translateY(5px) translateX(5px);;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
              }

              h3{
              font-size: 30px;                
              margin: 20px 40px;
              color: #551a8b;              
              }
          }

    }
`;

export const FotoProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  
  .thumbnails {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thumbnails img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: transform 0.2s;
    background-color: white;
    border-radius: 8px;
    border: 1px solid black;
    object-fit: contain;
  }

  

  .main-photo {
    width: 400px;
    height: 500px;
    margin: 0 50px;
    object-fit: contain;
    background-color: white;
    border-radius: 8px;
    border: 1px solid black;
  
  }
  .main-photo:hover {
  transform: scale(1.3); 
  }

  .thumbnails img:hover {
    transform: scale(2.5);
  }
`;


