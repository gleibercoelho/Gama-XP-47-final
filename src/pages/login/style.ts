import styled from "styled-components";

export const MainDivLogin = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 1200px) {
  MainDivLogin {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: block;
  }
}
`


export const LoginDivMaster = styled.div`

    div.welcome{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'roboto', sans-serif;
        margin: 1.5625rem 0;

        p{
            font-weight: 700;
        }
        img{
            object-fit: contain;
            width: 3.125rem
        }
    }
  
  display: flex;
  flex-direction: column;
  justify-content: center;  
  height: 85vh;
  width: 50vw;
  background-color: blue;
  margin: 1.25rem;
  font-family: "roboto", sans-serif;
  font-weight: 500;
  color: white;
  font-size: 1.875rem;
  border-radius: 1.25rem;

  form{
    
    display: flex;
    flex-direction: column;
    align-items: center;

    label{
        display: flex;
        flex-direction: column;
        align-items: center;        
        margin-bottom: .625rem;
        font-size: .9375rem;
        margin-right: 13.125rem;
        font-weight: 500;
        
        
    }
    
    input{
    width: 15.625rem;
    margin: 0 1.25rem;
    padding: .3125rem 0;
    border: none;
    font-size: .9375rem;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    margin-bottom: .625rem;
    margin-top: .3125rem;
    align-items: center;
    margin-left: 13.125rem;
    padding-left: .625rem;
  }
  input:focus{
    border: .125rem solid orange;
    outline: none;
  }

  input::placeholder{
    font-family: 'roboto', sans-serif;
    font-size: .75rem;
    padding-left: .625rem;
  }
  p{
    font-size: .9375rem;
    margin-top: 3.125rem;
  }

  button{
    display: flex;
    flex-direction: row;
    background-color: red;    
    color: white;
    padding: .375rem 1.25rem;
    align-items: center;
    justify-content: center;
    justify-items: center;    
    border-radius: .625rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: none;
    width: 9.375rem;
  }
  button:hover{
    opacity: 0.9;
    }

    button:active {
    transform: translateY(.3125rem) translateX(.3125rem);;
    box-shadow: 0 .3125rem .625rem rgba(0, 0, 0, 0.2);
    }
    
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
        a{
            text-decoration: none;
            padding: .625rem;
        }
        
    }
   

  }  
  @media (max-width: 768px) {
 

  
  width: 100%;
  margin: 0;
  border-radius: 0;
  label {
    margin-right: 0;
  }
  input {
    margin-left: 0;
  }
  }

  @media screen and (max-width: 1200px) {
  LoginDivMaster {
    width: 80vw;
    margin: 1.25rem 0;
  }

  LoginDivMaster form label {
    margin-right: 0;
    margin-bottom: .625rem;
  }

  LoginDivMaster form input {
    width: 80%;
    margin-left: 0;
  }
}
`;

export const BannerLogin = styled.div`


background: rgb(220,221,221);
background: black;
height: 85vh;
width: 45vw;
border-radius: 1.25rem;
margin: 1.25rem 1.25rem 1.25rem 0;
overflow: hidden;
font-family: "roboto", sans-serif;
padding-left: 8%;
z-index: -2;
padding-left: 1.875rem;
padding-top: 3.75rem;


h3{
    font-weight: 400;
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
    color: orange;
}
h2{
    font-weight: 500;
    font-size: 3.4375rem;
    padding: 0;
    margin: 0;
    color: red;
}

h1{
    font-weight: 800;
    font-size: 8.75rem;
    color: #fff;
    padding: 0;
    margin: 0;
}

img{
    max-width: 400px;
    max-height: 400px;
    position: relative;
    left: 17%;
    top: -10%;
    z-index: 0;
    object-fit: contain;
    
    
}

@media screen and (max-width: 1200px) {
 
    width: 80vw;
    margin: 1.25rem 0 0;
    padding: 1.875rem;
 

   h2 {
    font-size: 2.5rem;
  }

   h1 {
    font-size: 6.25rem;
  }

   img {
    max-width: 18.75rem;
    max-height: 18.75rem;
    left: 10%;
    top: 10%;
  }
}

@media (max-width: 768px) {
 
  display: none;
}
`

