import styled from "styled-components";


export const DivMaster = styled.div`

    display: flex;
    flex-direction: row;
   
    padding: 50px;
    
    div {
    h2{
        font-size: 60px;
        text-align: center;
        margin-bottom: 60px;
    }
    p{
        text-align: justify;
    }
    h3{
        font-size: 40px;
        
        margin: 20px 80px;
        
    }
    button{
        background-color: red;
        font-family: 'roboto', sans-serif;
        text-decoration: none;
        border: none;
        border-radius: 10px;
        padding: 15px;
        text-align: center;
        font-size: 20px;
        margin-left: 150px;
    }


    }
`;

export const FotoProductDiv = styled.div`
img{
    width: 600px;
}

`;