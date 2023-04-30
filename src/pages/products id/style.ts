import styled from "styled-components";

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81vh;
  font-size: 1.5rem;
  color: #333;
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81vh;
  font-size: 1.5rem;
  color: red;
`;

export const DivMaster = styled.div`

    display: flex;
    flex-direction: row;
    background-color: pink;
    margin: 1.875rem;   
    padding: 3.125rem;
    
    div.loading{
    
      align-items: center;
      margin: 0 auto ;
      min-height: 30vh;
      margin-top: 12.5rem;
    }

    div.infoDiv{
      background-color: white;
      border-radius: .625rem;
      border: .0625rem solid black; 
      height: 31.25rem;
        h2{
          font-size: 3.75rem;
          text-align: center;
          margin-bottom: 3.75rem;
          color: #551a8b;
          }
        p{
        text-align: justify;
        padding: 0 3.125rem;
        }
        div.priceDiv{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;      
          height: 6.25rem;
          margin-top: 1.875rem;
          font-weight: 600;

          button{

            
            background-color: red;       
            font-family: 'roboto', sans-serif;
            text-decoration: none;
            border: .0625rem solid black;
            color: white;
            font-weight: 600;
            border-radius: .625rem;        
            text-align: center;
            font-size: 1.25rem;
            padding: .625rem .625rem;
            height: 2.8125rem;
            margin: 1.25rem .3125rem;

            
            }

            button:hover{
              opacity: 0.8;
              transform: scale(1.1);

            }
            button:active {
              transform: translateY(.3125rem) translateX(.3125rem);;
              box-shadow: 0 .3125rem .625rem rgba(0, 0, 0, 0.2);
              }

              h3{
              font-size: 1.875rem;                
              margin: 1.25rem 2.5rem;
              color: #551a8b;              
              }
          }

    }

    @media screen and (max-width: 1200px) {
  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 1rem;
    padding: 2rem;
  

  .infoDiv {
     display: flex;
    height: auto;
    margin-top: 1rem;
    flex-direction: column;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }

    p {
      padding: 0 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0.5rem;
    padding: 1rem;
    align-items: center;
  

  .infoDiv {
    
    flex-direction: column;

    h2 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.5rem;
      padding: 0;
      
    }

    div.priceDiv {
      flex-direction: column;
      height: auto;
      margin-top: 1rem;

      button {
        margin: 0.5rem 0;
        a{font-size: 0.8rem;}
      }

      h3 {
        margin: 0.5rem 0;
      }
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
    width: 6.25rem;
    height: 6.25rem;
    margin-bottom: .625rem;
    cursor: pointer;
    transition: transform 0.2s;
    background-color: white;
    border-radius: .5rem;
    border: .0625rem solid black;
    object-fit: contain;
  }

  

  .main-photo {
    width: 25rem;
    height: 31.25rem;
    margin: 0 3.125rem;
    object-fit: contain;
    background-color: white;
    border-radius: .5rem;
    border: .0625rem solid black;
  
  }
  .main-photo:hover {
  transform: scale(1.3); 
  }

  .thumbnails img:hover {
    transform: scale(2.5);
  }

 

@media screen and (max-width: 1200px) {
  flex-direction: column;
  .FotoProductDiv {
    flex-direction: column;
    margin-bottom: 1rem;

    .thumbnails {
      flex-direction: row;
      justify-content: center;
      margin-bottom: 1rem;

      img {
        margin-right: 1rem;
        margin-bottom: 0;
      }
    }

    .main-photo {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }

  .thumbnails img {
    width: 4rem;
    height: 4rem;
  }

  .main-photo {
    width: 20rem;
    height: 25rem;
  }
}

@media screen and (max-width: 768px) {
  flex-direction: column;
  .FotoProductDiv {
    .thumbnails img {
      width: 3rem;
      height: 3rem;
    }

    .main-photo {
      width: 15rem;
      height: 18.75rem;
      margin: 0.5rem auto;
    }
  }
}
`;


