import styled from "styled-components";

export const MainDivSignIn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 48rem) {
  width: 100%;
  margin: 0;
  display: flex;
    flex-direction: column;
  
 
}
`;




export const SignInDivMaster = styled.div`
    display: flex;
    flex-direction: row;

  div.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "roboto", sans-serif;
    margin: 1.5625rem 0;

    p {
      font-weight: 700;
      font-size: 3.125rem;  
    }
    img {
      object-fit: contain;
      width: 3.125rem;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 50vw;
  background-color: #f5de0c;
  margin: 1.25rem;
  font-family: "roboto", sans-serif;
  font-weight: 500;
  color: white;
  font-size: 1.875rem;
  border-radius: 1.25rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: .625rem;
      font-size: .9375rem;
      margin-right: 11.25rem;
      font-weight: 500;
      color: black;
    }

    input {
      width: 15.625rem;
      margin: 0 1.25rem;
      padding: .3125rem 0;
      border: none;
      font-size: .9375rem;
      font-family: "roboto", sans-serif;
      font-weight: 500;
      margin-bottom: .625rem;
      margin-top: .3125rem;
      align-items: center;
      
      padding-left: .625rem;
    }
    input:focus {
      border: .125rem solid orange;
      outline: none;
    }

    input::placeholder {
      font-family: "roboto", sans-serif;
      font-size: .75rem;
      padding-left: .625rem;
    }
    p {
      font-size: .9375rem;
      margin-top: 3.125rem;
    }

    button {
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
      margin-bottom: 6.25rem;
      margin-top: 3.125rem;
    }
    button:hover {
      opacity: 0.9;
    }

    button:active {
      transform: translateY(.3125rem) translateX(.3125rem);
      ;
      box-shadow: 0 .3125rem .625rem rgba(0, 0, 0, 0.2);
    }   
  }
  @media only screen and (max-width: 48rem) {
    width: 100%;
    margin: 0;
    border-radius: 0;
    
    form {
      margin-bottom: 3.125rem;
    }
  }

  @media only screen and (min-width: 48rem) and (max-width: 75rem) {
    width: 90%;
    margin: 0 auto;
  }
  
`;

export const BannerSignIn = styled.div`
  background: rgb(220, 221, 221);
  background: red;
  height: 85vh;
  width: 45vw;
  border-radius: 1.25rem;
  margin: 1.25rem;
  overflow: hidden;
  font-family: "roboto", sans-serif;
  padding-left: 8%;
  z-index: -2;
  padding-left: 1.875rem;
  padding-top: 3.75rem;

  h3 {
    font-weight: 700;
    color: blue;
    font-size: 3.125rem;
  }
  h2 {
    font-weight: 700;
    color: black;
    font-size: 4.6875rem;
  }
  h1 {
    font-weight: 700;
    color: white;
    font-size: 6.25rem;
  }

  img{
    max-width: 26rem;
    
    position: relative;
    left: 17%;
    top: -0%;
    z-index: -1;
    object-fit: contain;
  }

  @media only screen and (max-width: 48rem) {
    width: 100%;
    height: 40vh;
    margin: 0;
    border-radius: 0;
    padding-left: 0;
    padding-top: 0;
    overflow: hidden;
    

    img{
      position: relative;
      top: -70%;
      left: 20%;
      width: 62%;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
    
    h1 {
      font-weight: 700;
      color: white;
      font-size: 4.375rem;
      margin-top: 3.125rem;
      text-align: center;
    }
    
    h2 {
      font-weight: 700;
      color: black;
      font-size: 3.125rem;
      text-align: center;
    }
    
    h3 {
      font-weight: 700;
      color: blue;
      font-size: 2.5rem;
      text-align: center;
      margin-top: 3.125rem;
    }
  }
  
  @media only screen and (min-width: 48rem) and (max-width: 75rem) {
    height: 83vh;
    
    h1 {
      font-size: 5rem;
    }
    h3{
      margin-top: 6.25rem;
    }

    img{
      top: -40%;
      left: -10%;
    }
  }
  `;