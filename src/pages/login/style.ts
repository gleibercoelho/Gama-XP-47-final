import styled from "styled-components";

export const MainDivLogin = styled.div`
display: flex;
flex-direction: row;
`


export const LoginDivMaster = styled.div`

    div.welcome{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'roboto', sans-serif;
        margin: 25px 0;

        p{
            font-weight: 700;
        }
        img{
            object-fit: contain;
            width: 50px
        }
    }
  
  display: flex;
  flex-direction: column;
  justify-content: center;  
  height: 85vh;
  width: 50vw;
  background-color: blue;
  margin: 20px;
  font-family: "roboto", sans-serif;
  font-weight: 500;
  color: white;
  font-size: 30px;
  border-radius: 20px;

  form{
    
    display: flex;
    flex-direction: column;
    align-items: center;

    label{
        display: flex;
        flex-direction: column;
        align-items: center;        
        margin-bottom: 10px;
        font-size: 15px;
        margin-right: 210px;
        font-weight: 500;
        
        
    }
    
    input{
    width: 250px;
    margin: 0 20px;
    padding: 5px 0;
    border: none;
    font-size: 15px;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 5px;
    align-items: center;
    margin-left: 210px;
    padding-left: 10px;
  }
  input:focus{
    border: 2px solid orange;
    outline: none;
  }

  input::placeholder{
    font-family: 'roboto', sans-serif;
    font-size: 12px;
    padding-left: 10px;
  }
  p{
    font-size: 15px;
    margin-top: 50px;
  }

  button{
    display: flex;
    flex-direction: row;
    background-color: red;    
    color: white;
    padding: 6px 20px;
    align-items: center;
    justify-content: center;
    justify-items: center;    
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: none;
  }
  button:hover{
    opacity: 0.9;
    }

    button:active {
    transform: translateY(5px) translateX(5px);;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
        a{
            text-decoration: none;
            padding: 10px;
        }
        
    }
   

  }  
`;

export const BannerLogin = styled.div`


background: rgb(220,221,221);
background: black;
height: 85vh;
width: 45vw;
border-radius: 20px;
margin: 20px 20px 20px 0;
overflow: hidden;
font-family: "roboto", sans-serif;
padding-left: 8%;
z-index: -2;
padding-left: 30px;
padding-top: 60px;


h3{
    font-weight: 400;
    font-size: 20px;
    padding: 0;
    margin: 0;
    color: orange;
}
h2{
    font-weight: 500;
    font-size: 55px;
    padding: 0;
    margin: 0;
    color: red;
}

h1{
    font-weight: 800;
    font-size: 140px;
    color: #fff;
    padding: 0;
    margin: 0;
}

img{
    max-width: 25rem;
    max-height: 25rem;
    position: relative;
    left: 17%;
    top: -50%;
    z-index: -1;
    object-fit: contain;
    
    
}

`

