import styled from "styled-components";

export const MainDivSignIn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const SignInDivMaster = styled.div`
    display: flex;
    flex-direction: row;

  div.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "roboto", sans-serif;
    margin: 25px 0;

    p {
      font-weight: 700;
      font-size: 50px;  
    }
    img {
      object-fit: contain;
      width: 50px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 50vw;
  background-color: #f5de0c;
  margin: 20px;
  font-family: "roboto", sans-serif;
  font-weight: 500;
  color: white;
  font-size: 30px;
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      font-size: 15px;
      margin-right: 180px;
      font-weight: 500;
      color: black;
    }

    input {
      width: 250px;
      margin: 0 20px;
      padding: 5px 0;
      border: none;
      font-size: 15px;
      font-family: "roboto", sans-serif;
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 5px;
      align-items: center;
      
      padding-left: 10px;
    }
    input:focus {
      border: 2px solid orange;
      outline: none;
    }

    input::placeholder {
      font-family: "roboto", sans-serif;
      font-size: 12px;
      padding-left: 10px;
    }
    p {
      font-size: 15px;
      margin-top: 50px;
    }

    button {
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
      margin-bottom: 100px;
      margin-top: 50px;
    }
    button:hover {
      opacity: 0.9;
    }

    button:active {
      transform: translateY(5px) translateX(5px);
      ;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }   
  }
`;

export const BannerSignIn = styled.div`
  background: rgb(220, 221, 221);
  background: red;
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

  h3 {
    font-weight: 700;
    color: blue;
    font-size: 50px;
  }
  h2 {
    font-weight: 700;
    color: black;
    font-size: 75px;
  }
  h1 {
    font-weight: 700;
    color: white;
    font-size: 100px;
  }

  img{
    max-width: 26rem;
    
    position: relative;
    left: 17%;
    top: -70%;
    z-index: -1;
    object-fit: contain;
  }
  `;